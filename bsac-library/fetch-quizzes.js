const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://library.bsac.com/quiz/';
const QUIZ_TYPES = {
  OT: { prefix: 'ot', suffix: '', count: 7, name: 'Ocean Diver' },
  ST: { prefix: 'ST', suffix: 'a', count: 6, name: 'Sports Diver' }
};

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${response.statusCode}`));
        return;
      }

      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseQuestions(html) {
  const questions = [];
  const questionRegex = /<(?:div|p) class="(?:Question|QuestionText)">([^<]+?)(?:\s*See Student Workbook[^<]*)?<\/(?:div|p)>/g;
  let match;

  while ((match = questionRegex.exec(html)) !== null) {
    let questionText = match[1]
      .replace(/\s+/g, ' ')
      .replace(/[_-]+/g, '_______')
      .replace(/\?[._-]+/g, '?')
      .trim();

    questions.push(questionText);
  }

  if (questions.length === 0) {
    const altRegex = /class="(?:Question|QuestionText)"[^>]*>([^<]+?)(?:\s*See Student Workbook[^<]*)?</g;
    while ((match = altRegex.exec(html)) !== null) {
      let questionText = match[1]
        .replace(/\s+/g, ' ')
        .replace(/[_-]+/g, '_______')
        .replace(/\?[._-]+/g, '?')
        .trim();
      questions.push(questionText);
    }
  }

  return questions;
}

async function downloadImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(`${BASE_URL}${imageUrl}`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image ${imageUrl}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

function parseAnswerCode(html, quizType, quizNumber) {
  const answersStart = html.indexOf(`I=new Array();`);
  const answersEnd = html.indexOf(`function StartUp(){`);
  const lines = html.substring(answersStart, answersEnd).split('\n');

  const imagesDir = path.join(__dirname, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }

  const codeRegex = /(.*)new Array\((.*)\)(.*)/;
  let answerCode = "";
  let downloadPromises = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
    let imgMatch;
    
    while ((imgMatch = imgRegex.exec(line)) !== null) {
      const imageSrc = imgMatch[1];
      const imageFileName = imageSrc.toLowerCase();
      const localImagePath = path.join(imagesDir, `${quizType.prefix}${quizNumber}_${imageFileName}`);
      
      const newImgSrc = `/bsac-library/images/${quizType.prefix}${quizNumber}_${imageFileName}`;
      const updatedLine = line.replace(imageSrc, newImgSrc);
      
      downloadPromises.push(downloadImage(imageSrc, localImagePath));
      
      answerCode += `    ${updatedLine}\n`;
      continue;
    }

    const codeMatches = line.match(codeRegex);
    if (!codeMatches) {
      answerCode += `    ${line}\n`;
    } else {
      const code = `${codeMatches[1]}[${codeMatches[2]}]${codeMatches[3]}`
      answerCode += `    ${code}\n`;
    }
  }

  return { answerCode: answerCode.trim(), downloadPromises };
}

async function processQuiz(quizType, quizNumber) {
  const url = `${BASE_URL}${quizType.prefix}${quizNumber}${quizType.suffix}.htm`;
  console.log(`Fetching ${quizType.name} Quiz ${quizNumber} from ${url}`);

  try {
    const html = await fetchHtml(url);
    const questions = parseQuestions(html);
    const { answerCode, downloadPromises } = parseAnswerCode(html, quizType, quizNumber);

    if (downloadPromises.length > 0) {
      console.log(`Downloading ${downloadPromises.length} images...`);
      await Promise.all(downloadPromises);
      console.log('Images downloaded successfully');
    }

    const outputPath = path.join(__dirname, `${quizType.prefix}${quizNumber}.js`.toLowerCase());
    const fileContent = `module.exports = {
  getQuestions: () => {
    return ${JSON.stringify(questions, null, 2)};
  },

  getAnswers: () => {
    let I = [];
    ${answerCode}
    return I;
  }
};`;

    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`Successfully created ${path.basename(outputPath)}`);

  } catch (error) {
    console.error(`Error processing ${quizType.name} Quiz ${quizNumber}:`, error);
  }
}

async function fetchAllQuizzes() {
  for (const [type, config] of Object.entries(QUIZ_TYPES)) {
    console.log(`\nFetching ${config.name} quizzes...`);
    for (let i = 1; i <= config.count; i++) {
      await processQuiz(config, i);
    }
  }
}

fetchAllQuizzes().catch(console.error); 