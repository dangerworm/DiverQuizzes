const { execSync } = require('child_process');

console.log('Starting quiz update process...\n');

try {
  console.log('Step 1/2: Cleaning up quiz content...');
  execSync('node check-quiz-content.js', { stdio: 'inherit' });
  console.log('✓ Quiz content cleaned successfully\n');

  console.log('Step 2/2: Converting quizzes to application format...');
  execSync('node convert-quizzes.js', { stdio: 'inherit' });
  console.log('✓ Quizzes converted successfully\n');

  console.log('All done! The quiz files have been updated successfully.');
} catch (error) {
  console.error('\nError updating quizzes:', error.message);
  process.exit(1);
} 