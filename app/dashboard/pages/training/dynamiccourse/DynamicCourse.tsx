import React from 'react';

interface Course {
  title: string;
  description: string;
  keyTopics: string[];
  location: string;
  nextSession: string;
  time: string;
  contactHours: number;
  pdfPath: string;
}

const DynamicCourse: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <p className="text-lg mb-4">{course.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
      <ul className="list-disc list-inside mb-6">
        {course.keyTopics.map((topic, idx) => (
          <li key={idx}>{topic}</li>
        ))}
      </ul>
      <p className="text-lg mb-4">
        <strong>Location:</strong> {course.location}
      </p>
      <p className="text-lg mb-4">
        <strong>Next Session:</strong> {course.nextSession}
      </p>
      <p className="text-lg mb-4">
        <strong>Time:</strong> {course.time}
      </p>
      <p className="text-lg mb-4">
        <strong>Contact Hours:</strong> {course.contactHours}
      </p>
      <a
        href={course.pdfPath}
        download
        className="block bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
      >
        Download PDF Schedule
      </a>
    </div>
  );
};

export default DynamicCourse;
