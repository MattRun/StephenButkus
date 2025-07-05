import HeroSection from './HeroSection';
import Testimonials from './Testimonials'; 
import CourseOfferings from './CourseOfferings';
import Opportunities from './BestPractices';


const CoursePage = () => (
  <div className="overflow-y-auto">
    <HeroSection />
        <div className="h-auto flex items-center justify-center bg-gray-700">
  <CourseOfferings />
</div>
    <div className="h-auto flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <Opportunities />
    </div>
    <div className="h-auto flex items-center justify-center bg-gray-700">
      <Testimonials />
    </div>
  </div>
);

export default CoursePage;
