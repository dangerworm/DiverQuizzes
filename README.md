# DiverQuizzes


A React/TypeScript application for BSAC Ocean Diver and Sports Diver students to test their knowledge. Built for Manchester University Sub Aqua Club (MUSAC), a BSAC-affiliated diving club at the University of Manchester.

## Project Background

This project was developed through a collaboration between Drew Morgan (BSAC Open Water Instructor and Diving Officer at MUSAC) and Claude (Anthropic's AI assistant). Drew provided the diving expertise, user experience requirements, and project direction, while Claude contributed to the technical implementation and UI design.

The development process was highly iterative, with features being refined based on real teaching needs:
- Questions and answers are randomized to encourage learning rather than memorization
- Multiple choice support was carefully implemented to handle BSAC's varied question formats
- The running score display helps students track their progress
- The water-themed UI with animated bubbles creates an appropriate atmosphere
- Content management tools allow instructors to maintain accurate quiz content

The result is a practical tool that helps diving students learn and review course material in an engaging way, while giving instructors confidence that the content aligns with BSAC's training standards.
## Features

- Multiple choice quizzes covering all Ocean Diver and Sports Diver training modules
- Support for both single-answer and multiple-answer questions
- Randomized question and answer order
- Running score display
- Immediate feedback on incorrect answers with retry option
- Animated transitions between questions
- Responsive design for mobile and desktop
- Water-themed UI with MUSAC and BSAC branding

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (usually comes with Node.js)
- Git

## Installation

1. Clone the repository:

- `bash`

- `git clone https://github.com/dangerworm/DiverQuizzes.git`

- `cd DiverQuizzes`

2. Install dependencies:

- `bash`

- `cd client`

- `npm install`


## Quiz Content Management

The quiz content can be managed in two ways:

### Initial Setup

When first setting up the project or to get the latest BSAC content:

1. Fetch quiz content from BSAC:

- `bash`

- `cd client/public/bsac-library`

- `node fetch-quizzes.js`


2. Process the quiz files:

- `bash`

- `cd client/public/bsac-library`

- `node update-quizzes.js`


### Maintaining Local Edits

If you've made local edits to the quiz content and want to update the JSON files:


- `bash`

- `cd client/public/bsac-library`

- `node update-quizzes.js`


Note: Running `fetch-quizzes.js` will overwrite any local edits you've made to the quiz content.

## Running the Application

1. Start the development server:

- `bash`

- `cd client`

- `npm start`


2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
client/
├── public/
│ ├── bsac-library/ # Scripts for fetching and processing quiz data
│ │ ├── fetch-quizzes.js # Fetches quiz data from BSAC website
│ │ ├── check-quiz-content.js # Cleans up text and formatting
│ │ ├── convert-quizzes.js # Converts to application format
│ │ ├── update-quizzes.js # Orchestrates the update process
│ │ └── otN.js, stN.js # Raw quiz data files
│ ├── quizzes/ # Generated JSON quiz files
│ └── images/ # Logo files
├── src/
│ ├── components/ # React components
│ │ ├── CourseSelector.tsx # Course selection screen
│ │ ├── QuizSelector.tsx # Quiz selection screen
│ │ ├── QuizCard.tsx # Question display
│ │ └── QuizResults.tsx # Results display
│ ├── types/ # TypeScript type definitions
│ ├── App.tsx # Main application component
│ └── App.css # Application styles
└── package.json # Project dependencies and scripts
```

## Development Notes

- Built with React 18 and TypeScript
- Uses Framer Motion for animations
- Follows BSAC's training structure
- Implements responsive design principles
- Questions and answers are randomized for each attempt
- "All of the above" type answers are always placed last
- Multiple choice questions support any number of correct answers
- Running score calculation based on completed questions only

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- BSAC for providing the quiz content
- Manchester University Sub Aqua Club
- All contributors to the project

## Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/dangerworm/DiverQuizzes/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible, including:
   - Steps to reproduce the issue
   - Expected behavior
   - Actual behavior
   - Browser and device information
