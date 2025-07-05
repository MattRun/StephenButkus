// components/TestimonialsSlider.tsx

import { useState } from 'react';
import Image from 'next/image';
import styles from './testimonialsSlider.module.css';

const testimonials = [
  { name: 'LBC Beachgirl', text: 'I found them to be very friendly and knowledgeable.  AEHS offers initial and refresher training courses, they are fully staffed with experienced instructors who are industry experts in the environmental fields.', rating: 5 },
  { name: 'Richard Chavez', text: 'Used AEHS to take my refresher courses that needed to get updated. They made the entire process easy and the staff was really friendly. I will keep coming to them for my course and recommend them for yours too!!', rating: 5 },
  { name: 'Sebastian Mosquera', text: 'Aehs helped me get my refresher courses  with ease and efficiency. They were able to send me my certs with ease and staff was really friendly', rating: 5 },
  // { name: 'Emily White', text: 'Hands-on and practical training.', rating: 5 },
  // { name: 'Chris Brown', text: 'Excellent training facilities.', rating: 4 },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* <h2 className={styles.title}>Reviews</h2> */}
      <div className={styles.carousel}>
        <button onClick={handlePrevious} className={styles.navButton}>
          &#10094;
        </button>

        <div className={styles.cardsContainer}>
          {testimonials.map((testimonial, index) => {
            let positionClass = '';

            // Determine the class based on relative position to the current index
            if (index === currentIndex) {
              positionClass = styles.center;
            } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
              positionClass = styles.left;
            } else if (index === (currentIndex + 1) % testimonials.length) {
              positionClass = styles.right;
            } else {
              positionClass = styles.hidden;
            }

            return (
              <div key={index} className={`${styles.card} ${positionClass}`}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                  <Image src="/User_Icon.png" alt="Profile" width={60} height={60} className="mx-auto rounded-full" />
                  <p className="mt-4 text-gray-700">"{testimonial.text}"</p>
                  <h4 className="mt-2 font-semibold text-[#3c6484]">{testimonial.name}</h4>
                  <p className="text-yellow-500">{"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className={styles.navButton}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
