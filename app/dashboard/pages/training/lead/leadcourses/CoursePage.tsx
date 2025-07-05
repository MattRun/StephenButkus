'use client';
import HeroSection from './HeroSection';
import Opportunities from './BestPractices';
import Testimonials from './Testimonials';
import CourseOfferings from './CourseOfferings';

const CoursePage = () => (
  <div className="overflow-y-auto">
    <HeroSection />
    <div className="h-auto flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <CourseOfferings />
    </div>
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <Opportunities />
    </div>
    <div className="h-auto bg-white flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <Testimonials />
    </div>
  </div>
);

export default CoursePage;
