'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
}

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query; // Get dynamic category from URL
  const [courses, setCourses] = useState<Course[]>([]); // Use the Course type for the state

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(`/api/courses?category=${category}`);
      const data = await response.json();
      setCourses(data); // TypeScript now expects this to be an array of Course
    }
    if (category) fetchCourses();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">{category} Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/dashboard/pages/training/${category}/${course.id}`}>
            <a className="block p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p>{course.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
