const fs = require('fs');
const path = require('path');

function decodeHtmlEntities(text) {
  if (!text) return text;
  
  const entities = {
    '&#x2019;': `'`,  // Right single quote
    '&#x2018;': `'`,  // Left single quote
    '&#x201C;': `"`,  // Left double quote
    '&#x201D;': `"`,  // Right double quote
    '&quot;': `"`,    // Double quote
    '&apos;': `'`,    // Apostrophe
    '&amp;': `&`,     // Ampersand
    '&lt;': `<`,      // Less than
    '&gt;': `>`,      // Greater than
    '&ndash;': `–`,   // En dash
    '&mdash;': `—`,   // Em dash
    '&hellip;': `...`, // Ellipsis
  };

  return Object.entries(entities).reduce(
    (text, [entity, char]) => text.replace(new RegExp(entity, 'g'), char),
    text
  );
}

function fixContent(text) {
  if (!text) return text;

  // First decode any HTML entities
  let fixed = decodeHtmlEntities(text);

  // Fix spelling mistakes
  const spellingFixes = {
    'superceded': 'superseded',
    'committment': 'commitment',
    'reccommend': 'recommend',
    'occured': 'occurred',
    'seperate': 'separate',
    'accross': 'across',
    'dependant': 'dependent',
    'neccessary': 'necessary',
    'concious': 'conscious',
    'accomodate': 'accommodate',
    'acheive': 'achieve',
    'apparant': 'apparent',
    'existance': 'existence',
    'occuring': 'occurring',
    'preceeding': 'preceding',
    'proceedure': 'procedure',
    'succesful': 'successful',
    'untill': 'until',
    'withhold': 'with hold'
  };

  // Apply spelling fixes
  Object.entries(spellingFixes).forEach(([wrong, right]) => {
    const regex = new RegExp(wrong, 'gi');
    fixed = fixed.replace(regex, right);
  });

  // Fix spacing issues
  fixed = fixed
    .replace(/\s+/g, ' ')                    // Fix multiple spaces
    .replace(/\s+\./g, '.')                  // Fix space before period
    .replace(/\s+,/g, ',')                   // Fix space before comma
    .replace(/\s+\?/g, '?')                  // Fix space before question mark
    .replace(/\.\s+([a-z])/g, (m, l) => `. ${l.toUpperCase()}`) // Capitalize after period
    .replace(/\s+'/g, `'`)                   // Fix space before apostrophe
    .replace(/'\s+/g, `'`)                   // Fix space after apostrophe
    .replace(/\d+m/g, m => m.replace('m', ' m')) // Add space before meters
    .replace(/\.{4,}/g, '...')              // Fix multiple dots
    .replace(/\s+$/g, '')                    // Remove trailing whitespace
    .replace(/^\s+/g, '')                    // Remove leading whitespace
    .replace(/\s*\?\s*\./g, '?')            // Fix question mark followed by period
    .replace(/\s*!\s*\./g, '!')             // Fix exclamation mark followed by period
    .replace(/\s*\.\s*/g, '. ')             // Ensure single space after period
    .replace(/\s*,\s*/g, ', ')              // Ensure single space after comma
    .trim();

  return fixed;
}

function fixQuizFile(filePath) {
  console.log(`\nFixing ${path.basename(filePath)}:`);
  const quizModule = require(filePath);
  const questions = quizModule.getQuestions();
  const answers = quizModule.getAnswers();
  let fixesMade = false;

  // Fix questions
  const fixedQuestions = questions.map(q => {
    const fixed = fixContent(q);
    if (fixed !== q) {
      console.log(`Fixed question: "${q}" -> "${fixed}"`);
      fixesMade = true;
    }
    return fixed;
  });

  // Fix answers and feedback
  answers.forEach((question, qIndex) => {
    if (!question || !question[3]) return;
    
    question[3].forEach((answer, aIndex) => {
      const fixedAnswerText = fixContent(answer[0]);
      const fixedFeedback = fixContent(answer[1]);
      
      if (fixedAnswerText !== answer[0]) {
        console.log(`Fixed answer: "${answer[0]}" -> "${fixedAnswerText}"`);
        answer[0] = fixedAnswerText;
        fixesMade = true;
      }
      
      if (fixedFeedback !== answer[1]) {
        console.log(`Fixed feedback: "${answer[1]}" -> "${fixedFeedback}"`);
        answer[1] = fixedFeedback;
        fixesMade = true;
      }
    });
  });

  if (fixesMade) {
    // Write the fixed content back to the file
    const fileContent = `module.exports = {
  getQuestions: () => {
    return ${JSON.stringify(fixedQuestions, null, 2)};
  },

  getAnswers: () => {
    let I = ${JSON.stringify(answers, null, 2)};
    return I;
  }
};`;

    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Fixed content written to ${path.basename(filePath)}`);
  } else {
    console.log('No fixes needed.');
  }
}

function fixAllQuizzes() {
  const files = fs.readdirSync(__dirname);
  const quizFiles = files.filter(file => /^ot\d+\.js$/.test(file));

  console.log(`Fixing ${quizFiles.length} quiz files...`);

  quizFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    try {
      fixQuizFile(filePath);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error);
    }
    console.log('\n' + '-'.repeat(80));
  });
}

fixAllQuizzes(); 