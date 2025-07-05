// pages/AboutPage.tsx
'use client'
import Header from './Header';
import MissionStatement from './MissionStatement';
import Features from './Features';
import Instructors from './Instructors';
import History from './History';
import ContactSection from './ContactSection';
import TestimonialsSlider from './TestimonialsSlider';
import Review from './Review';
import SocialMedia from './SocialMedia';

const AboutPage = () => (
  <div>
    <Header />
    <MissionStatement />
    {/* <Features /> */}
    <History />
    <Instructors />
    <TestimonialsSlider />
    <Review />
    <ContactSection />
    <SocialMedia />
  </div>
);

export default AboutPage;
