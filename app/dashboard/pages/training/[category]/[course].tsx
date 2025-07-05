'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface CourseData {
  title: string;
  description: string;
  keyTopics: string[];
}

const CoursePage = () => {
  const router = useRouter();
  const { course } = router.query;
  const [courseData, setCourseData] = useState<CourseData | null>(null);

  useEffect(() => {
    async function fetchCourse() {
      const response = await fetch(`/dashboard/pages/api/courses/${course}`);
      const data = await response.json();
      setCourseData(data);
    }
    if (course) fetchCourse();
  }, [course]);

  if (!courseData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
      <p>{courseData.description}</p>
      <h2 className="text-2xl font-bold mt-4">Key Topics:</h2>
      <ul className="list-disc ml-8">
        {courseData.keyTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
