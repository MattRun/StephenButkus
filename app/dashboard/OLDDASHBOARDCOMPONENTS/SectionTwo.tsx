// components/FAQSection.tsx

import { useState } from 'react';
import styles from './sectionTwo.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of training courses do you offer?',
      answer: "We offer a wide range of courses, including certifications for Asbestos, Lead, Mold, Analytical, Worker Safety, CPR AED & First Aid, HAZWOPER, and more. Whether you're looking for initial certification, refresher training, or specialized programs, we have options to meet your needs.",
    },
    {
      question: 'Are your courses available online or in-person?',
      answer: 'Our courses are offered in various formats, including Online, In-Person, and Hybrid (Online and In-Person) options. Check the course details for specific availability.'
    },
    {
      question: 'How do I register for a course?',
      answer: 'You can register directly through our website by navigating to the course page and clicking the registration link. For some courses, additional forms or payment links may be provided.'
    },
    {
      question: 'Do you provide preparation for state or federal certification exams?',
      answer: 'Yes, we offer courses designed to prepare you for certifications such as CDPH, Cal/OSHA CAC & CSST exams, and more. Check our schedule for training dates that align with upcoming exam deadlines.'
    },
  ];

  return (
    <div className={`${styles.container} flex flex-col lg:flex-row items-stretch`}>
      {/* Image Section */}
      <motion.div
        className="relative flex-1 w-full h-auto lg:h-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/FAQ_SVG.svg"
          alt="FAQ Illustration"
          className={`${styles.image}`}
          layout="responsive"
          width={500}
          height={500}
        />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className={`${styles.textContainer} flex-1 p-8 lg:p-24`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`${styles.title} text-5xl font-bold mb-4`}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.accordionItem}>
            <button
              className={`${styles.accordionButton} text-3xl font-semibold mb-2 w-full text-left`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="text-2xl text-gray-800 mb-4"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
        <Link href="/dashboard/pages/resources/faq">
          <div className={`${styles.link} inline-block font-semibold mt-8`}>View All FAQs →</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FAQSection;

