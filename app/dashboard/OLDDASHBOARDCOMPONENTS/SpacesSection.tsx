import React from 'react';
import styles from './main.module.css'; // Import the CSS module

const SpacesSection = () => {
  return (
    <div className={styles.mainSection}>
      <section className={styles.spacesSection}>
        {/* Left Feature */}
        <div className={`relative group ${styles.leftSpacesFeature}`}>
          <img
            // src="/GC_SC.png"
            src="/AboutCardSpaces.png"
            alt="Spaces"
            className="w-full h-full object-cover"
          />
          <div className={styles.textOverlayOnImage}>
            <h3>Read More</h3>
            {/* <p>Read More!</p> */}
            <a href="/dashboard/pages/calendar" className={styles.featureButton}>AEHS Info</a>
          </div>
        </div>

        {/* Right Features */}
        <div className={styles.rightSpacesFeatures}>
          <div className={`relative group ${styles.spacesFeatureCardSmall}`}>
            <img
              src="/thisisengineering-EhPSMCvT9rY-unsplash.jpg"
              alt="Charging"
              className="w-full h-full object-cover"
            />
            <div className={styles.textOverlayOnImage}>
              <h3>In-Person Courses</h3>
              <p>Elevating how we train Professionals</p>
              <a href="/dashboard/pages/alltraining" className={styles.featureButton}>Explore</a>
            </div>
          </div>

          <div className={`relative group ${styles.spacesFeatureCardSmall}`}>
            <img
              src="/michael-schiffer-13UugSL9q7A-unsplash.jpg"
              alt="Gear Shop"
              className="w-full h-full object-cover"
            />
            <div className={styles.textOverlayOnImage}>
              <h3>Online Courses</h3>
              <p>Learn how you can be a expert without leaving the comfort of your home</p>
              <a href="/dashboard/pages/alltraining" className={styles.featureButton}>Visit</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpacesSection;
