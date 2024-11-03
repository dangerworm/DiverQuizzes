import React from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
}

interface CourseSelectorProps {
  onCourseSelect: (courseId: string) => void;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({ onCourseSelect }) => {
  const courses: Course[] = [
    {
      id: 'ocean-diver',
      title: 'Ocean Diver',
      description: 'The entry-level Ocean Diver course is the starting point for BSAC\'s diver training programme.'
    },
    {
      id: 'sports-diver',
      title: 'Sports Diver',
      description: 'The Sports Diver course builds on the Ocean Diver qualification, developing more advanced diving skills.'
    }
  ];

  return (
    <div className="course-selector">
      <h1>BSAC Knowledge Reviews</h1>
      <p>Select your course to begin:</p>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card" onClick={() => onCourseSelect(course.id)}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <button className="select-button">View Quizzes</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSelector; 