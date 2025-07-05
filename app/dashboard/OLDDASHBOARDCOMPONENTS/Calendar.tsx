'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './main.module.css'; // Assuming main.module.css is where you define your styles

const CalendarHighlightSection = () => {
  const router = useRouter();

  return (
    <section className={styles.calendarSection}>
      <div className={styles.calendarContainer}>
        {/* Left Side - Clickable Image */}
        <div
          className={styles.calendarImageWrapper}
          onClick={() => router.push('/dashboard/pages/calendar')}
        >
          <Image
            src="/Calendar_Purple.png"
            alt="Interactive Calendar"
            width={800}
            height={600}
            className={styles.calendarImage}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className={styles.calendarTextContent}>
          <h2 className={styles.calendarTitle}>Google Calendar</h2>
          <p className={styles.calendarDescription}>
            Stay updated with our course schedules and exam dates using our integrated Google Calendar.
          </p>
          <button
            onClick={() => router.push('/dashboard/pages/calendar')}
            className={styles.calendarLinkButton}
          >
            Calendar →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalendarHighlightSection;
