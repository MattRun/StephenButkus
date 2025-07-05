import React from 'react';
import Link from 'next/link';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <section className={styles.featureWrapperFullWidth}>
      <div className={styles.featureInnerContainer}>
        <div className={`relative group overflow-hidden rounded-lg shadow-lg ${styles.featureCard}`}>
          <img
            src="/Asset 31@1980x.png"
            alt="Our Mission"
            className={styles.featureImage}
          />
          <div className={styles.buttonContainer}>
            <Link href="/dashboard/pages/about/pinnaclelaboratory">
              <button className={styles.exploreButton}>Visit</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
