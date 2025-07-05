// 'use client';
import React from 'react';
import styles from './main.module.css';
import Link from 'next/link';

const courses = [
  { title: "ASBESTOS", description: "Our in-depth asbestos training is designed to keep you skilled, compliant, and confident.", path: "/dashboard/pages/training/asbestos", image: "/ASBTRAIN_002.jpeg" },
  { title: "LEAD", description: "Unlock your potential with our expert-led lead safety and compliance training.", path: "/dashboard/pages/training/lead", image: "/lead_header.jpeg" },
  { title: "MOLD", description: "Gain the expertise to identify and manage mold hazards with confidence.", path: "/dashboard/pages/training/mold", image: "/iStock-1468031957.jpg" },
  { title: "ANALYTICAL", description: "Learn in demand analytical techniques in an operating laboratory.", path: "/dashboard/pages/training/analytical", image: "/Mold.jpeg" },
  { title: "HAZWOPER", description: "Hazardous Waste Operations and Emergency Response Training.", path: "/dashboard/pages/training/hazwoper", image: "/HAZWOPER.jpeg" },
  { title: "WORKER SAFETY", description: "Essential safety training for workers.", path: "/dashboard/pages/training/workersafety", image: "/ConfinedSpaces.jpeg" },
  { title: "CPR, AED & FIRST AID", description: "Life-saving techniques and first aid training.", path: "/dashboard/pages/training/cpr", image: "/CPR.jpeg" },
  { title: "AEHS", description: "Explore our institution and its offerings.", path: "/dashboard/pages/about/aehsinfo", image: "/AEHS_Logo.png" },
];

const CourseOverviewSection = () => {
  return (
    <section className={styles.courseOverviewSection}>
      {/* Centered Text Header */}
      <div className={styles.headerTextContainer}>
        <h1 className={styles.headerText}>All Training Courses</h1>
      </div>

      {/* Course Tiles */}
      <div className={styles.gridContainer}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              {/* Front side with unique image */}
              <div className={styles.cardFront} style={{ backgroundImage: `url(${course.image})` }}>
                <h2 className={styles.cardTitle}>{course.title}</h2>
              </div>
              {/* Back side */}
              <div className={styles.cardBack}>
                <p className={styles.cardDescription}>{course.description}</p>
                <Link href={course.path} className={styles.cardLink}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      

          {/* Explore All Training Options Button */}
          <div className={styles.viewAllContainer}>
            <div className={styles.viewAllOverlay}>
              <Link href="/dashboard/pages/alltraining" className={styles.viewAllButton}>
                Explore All Training Options <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>

    </section>
  );
};

export default CourseOverviewSection;
