import HeroSection from './HeroSection';
import Testimonials from './Testimonials'; 
import CourseOfferings from './CourseOfferings';
import Opportunities from './BestPractices';


const CoursePage = () => (
  <div className="overflow-y-auto">
    <HeroSection />
        <div className="h-auto bg-gray-100 flex items-center justify-center bg-gray-200">
  <CourseOfferings />
</div>
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <Opportunities />
    </div>
    <div className="h-auto flex items-center justify-center bg-gray-200">
      <Testimonials />
    </div>
  </div>
);

export default CoursePage;
