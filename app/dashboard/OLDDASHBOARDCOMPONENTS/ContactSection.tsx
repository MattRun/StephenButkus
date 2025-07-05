'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter
import styles from './contactSection.module.css';

const ContactSection = () => {
  const router = useRouter(); // Initialize router

  const handleButtonClick = () => {
    router.push('/dashboard/pages/contactus/generalinquiry'); // Navigate to the path
  };

  return (
    <div className={`${styles.contactContainer} relative w-full`}>
      {/* Full-width background image */}
      <Image
        src="/Schedule.png"
        alt="Contact Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Contact Button */}
      <button className={`${styles.contactButton}`} onClick={handleButtonClick}>
        Contact
      </button>
    </div>
  );
};

export default ContactSection;
