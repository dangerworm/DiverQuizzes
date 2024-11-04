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

function parseAnswerCode(html) {
  const answersStart = html.indexOf(`I=new Array();`);
  const answersEnd = html.indexOf(`function StartUp(){`);
  const lines = html.substring(answersStart, answersEnd).split('\n');

  const codeRegex = /(.*)new Array\((.*)\)(.*)/;
  let answerCode = "";
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    const codeMatches = line.match(codeRegex);

    if (!codeMatches) {
      answerCode += `    ${line}\n`;
    }
    else {
      const code = `${codeMatches[1]}[${codeMatches[2]}]${codeMatches[3]}`
      answerCode += `    ${code}\n`;
    }
  }

  return answerCode.trim();
}

async function processQuiz(quizType, quizNumber) {
  const url = `${BASE_URL}${quizType.prefix}${quizNumber}${quizType.suffix}.htm`;
  console.log(`Fetching ${quizType.name} Quiz ${quizNumber} from ${url}`);

  try {
    const html = await fetchHtml(url);
    const questions = parseQuestions(html);
    const answerCode = parseAnswerCode(html);

    const outputPath = path.join(__dirname, `${quizType.prefix}${quizNumber}.js`.toLowerCase());
    const fileContent = `module.exports = {
  getQuestions: () => {
    return ${JSON.stringify(questions, null, 2)};
  },

  getAnswers: () => {
    let I = [];
    ${(answerCode)}
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