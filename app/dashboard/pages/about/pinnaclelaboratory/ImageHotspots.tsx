// components/ImageHotspots.tsx
'use client'
import React, { useState } from 'react';
import styles from './imageHotspots.module.css';

const ImageHotspots = () => {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);


  const hotspots = [
    { id: 1, top: '10%', left: '42%', text: 'Eyepiece / Ocular Lens: The Viewing piece for people to examine the testing sample.' },
    { id: 5, top: '39%', left: '38%', text: 'Turret: The part of the microscope that magnifies the specimen.' },
    { id: 2, top: '65%', left: '37.4%', text: 'Objective Lens: The part of the microscope that magnifies the specimen.' },
    { id: 3, top: '74%', left: '45%', text: 'Slide: The glass slide holds the specimen in place for viewing.' },
    { id: 4, top: '72%', left: '25%', text: 'Slide Holder: The piece that locks the glass slide in place.' },
  ];

  return (
    <div className={styles.imageContainer}>
      <img src="/MicroScope.jpeg" alt="Microscope Diagram" className={styles.image} />

      {hotspots.map((hotspot) => (
        <div
          key={hotspot.id}
          className={styles.hotspot}
          style={{ top: hotspot.top, left: hotspot.left }}
          onMouseEnter={() => setHoveredHotspot(hotspot.id)}
          onMouseLeave={() => setHoveredHotspot(null)}
        >
          <div className={styles.icon}>?</div>
          <div
            className={`${styles.tooltip} ${hoveredHotspot === hotspot.id ? styles.visible : ''}`}
            style={{ top: hoveredHotspot === hotspot.id ? '-2.5rem' : 'auto' }} // Adjusts tooltip position based on hover
          >
            {hotspot.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHotspots;
