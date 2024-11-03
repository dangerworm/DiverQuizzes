const fs = require('fs');
const path = require('path');

const QUIZ_TYPES = {
  OT: {
    prefix: 'ot',
    name: 'Ocean Diver',
    descriptions: {
      1: "Introduction to Our Branch/Centre and Ocean Diver Training",
      2: "Basic Diving Theory",
      3: "The Body and Diving",
      4: "Diving Equipment",
      5: "Diving Signals and Communications",
      6: "Safe Diving Practice",
      7: "Problem Management"
    }
  },
  ST: {
    prefix: 'st',
    name: 'Sports Diver',
    descriptions: {
      1: "Rescue Skills and Diving First Aid",
      2: "Advanced Diving Skills",
      3: "Advanced Diving Theory",
      4: "Seamanship and Navigation",
      5: "Decompression and Dive Planning",
      6: "Advanced Rescue Skills"
    }
  }
};

function getDescription(quizType, quizNumber) {
  return QUIZ_TYPES[quizType].descriptions[quizNumber] || 
    `${QUIZ_TYPES[quizType].name} Training Module ${quizNumber}`;
}

function isAllOfTheAboveAnswer(text) {
  const phrases = [
    'all of the above',
    'all of these',
    'all of these will be needed',
    'all of these are correct'
  ];
  return phrases.some(phrase => text.toLowerCase().includes(phrase));
}

function sortAnswers(answers) {
  // Create a copy of the answers array
  const sortedAnswers = [...answers];
  
  // Find any "all of the above" type answers
  const allOfAboveIndex = sortedAnswers.findIndex(answer => 
    isAllOfTheAboveAnswer(answer[0])
  );

  // If found, move it to the end
  if (allOfAboveIndex !== -1) {
    const allOfAbove = sortedAnswers.splice(allOfAboveIndex, 1)[0];
    sortedAnswers.push(allOfAbove);
  }

  return sortedAnswers;
}

function convertQuiz(quizType, quizNumber) {
  const prefix = QUIZ_TYPES[quizType].prefix;
  const quizModule = require(`./${prefix}${quizNumber}.js`);
  const questions = quizModule.getQuestions();
  const answers = quizModule.getAnswers();

  const convertedQuiz = {
    id: `${prefix}${quizNumber}`,
    title: `${QUIZ_TYPES[quizType].name} Knowledge Review - ${prefix.toUpperCase()}${quizNumber}`,
    description: getDescription(quizType, quizNumber),
    questions: []
  };

  answers.forEach((question, index) => {
    if (!question || !question[3]) return;

    // Sort the answers, moving "all of the above" to the end
    const sortedAnswerArray = sortAnswers(question[3]);

    // Create a mapping of old indices to new indices
    const indexMap = question[3].reduce((map, answer, oldIndex) => {
      const newIndex = sortedAnswerArray.findIndex(a => a[0] === answer[0]);
      map[oldIndex] = newIndex;
      return map;
    }, {});

    const answers = sortedAnswerArray.map((answer, answerIndex) => ({
      id: answerIndex + 1,
      text: answer[0]
    }));

    // Find all correct answers and map their indices to the new positions
    const correctAnswerIds = question[3]
      .map((answer, oldIdx) => answer[2] === 1 ? indexMap[oldIdx] + 1 : null)
      .filter(id => id !== null);

    const correctCount = correctAnswerIds.length;

    const convertedQuestion = {
      id: index + 1,
      text: questions[index] || `Question ${index + 1}`,
      answers: answers,
      correctAnswerIds: correctAnswerIds,
      isMultipleChoice: correctCount > 1
    };

    convertedQuiz.questions.push(convertedQuestion);
  });

  // Write the converted quiz to a JSON file
  const outputPath = path.join(__dirname, `../quizzes/${prefix}${quizNumber}.json`);
  fs.writeFileSync(
    outputPath,
    JSON.stringify(convertedQuiz, null, 2),
    'utf8'
  );

  console.log(`Quiz ${prefix.toUpperCase()}${quizNumber} converted and saved to ${outputPath}`);
  console.log(`Converted ${convertedQuiz.questions.length} questions`);
}

function convertAllQuizzes() {
  // Process each quiz type
  Object.entries(QUIZ_TYPES).forEach(([type, config]) => {
    console.log(`\nConverting ${config.name} quizzes...`);
    
    // Get all quiz files for this type
    const files = fs.readdirSync(__dirname);
    const quizFiles = files.filter(file => new RegExp(`^${config.prefix}\\d+\\.js$`).test(file));

    console.log(`Found ${quizFiles.length} ${config.name} quiz files to convert`);

    quizFiles.forEach(file => {
      const quizNumber = parseInt(file.match(/\d+/)[0]);
      try {
        convertQuiz(type, quizNumber);
      } catch (error) {
        console.error(`Error converting quiz ${config.prefix}${quizNumber}:`, error);
      }
    });
  });
}

convertAllQuizzes();