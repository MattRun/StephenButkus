'use client';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './history.module.css';
import Link from 'next/link';

const History = () => {
  const historyData = [
    {
      title: 'Our Foundation',
      subheading: 'Founded in 2020',
      text: (
        <>
          Recognizing the need for a leader in <strong>Environmental Health & Safety (EHS)</strong> training in the South Bay, the <strong>Academy of Environmental Health & Safety (AEHS)</strong> was founded in 2020 to serve the needs of EHS professionals not just locally, but state-wide.
        </>
      ),
      imageSrc: '/AdobeStock_1.png',
    },
    {
      title: 'Building a Network of Excellence',
      subheading: 'Expanding in 2022',
      text: (
        <>
          To provide our students with industry-leading skillsets and knowledge, AEHS recognizes the value in partnering with organizations that can benefit students' success.
          In 2022, AEHS <Link href="https://pinnaclelab.com" className={styles.link}>partnered with Void Creatives</Link> to expand its course offerings to include <Link href="https://example.com" className={styles.link}>analytical methods</Link> (NIOSH 582, Polarized Light Microscopy, etc).
        </>
      ),
      imageSrc: '/AdobeStock_2.png',
    },
    {
      title: 'Connecting Students to Industry Leaders',
      subheading: 'Real-World Training',
      text: (
        <>
          Utilizing its instructors’ <strong>extensive backgrounds</strong> in environmental health, occupational safety, laboratory analytical services, and education, AEHS students receive <strong>top-notch training</strong> with real-world examples.
        </>
      ),
      imageSrc: '/AdobeStock_3.png',
    },
  ];

  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.historyTitle}>History</h2>
      {historyData.map((item, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

        return (
          <div
            key={index}
            ref={ref}
            className={`${styles.historyItem} ${inView ? styles.historyItemVisible : ''} ${
              index % 2 === 0 ? '' : styles.historyItemReverse
            }`}
          >
            <Image
              src={item.imageSrc}
              alt={`${item.title} Image`}
              width={500}
              height={300}
              className={styles.historyImage}
            />
            <div className={styles.historyTextContainer}>
              <h3 className={styles.historyTitleText}>{item.title}</h3>
              <h4 className={styles.historySubheading}>{item.subheading}</h4>
              <hr className={styles.historyDivider} />
              <p className={styles.historyText}>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
