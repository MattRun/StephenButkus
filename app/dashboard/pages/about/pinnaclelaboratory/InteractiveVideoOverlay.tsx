// components/InteractiveVideoOverlay.tsx

import React, { useRef, useState } from 'react';
import styles from './interactiveVideoOverlay.module.css';

const InteractiveVideoOverlay = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleOverlayClick = () => {
    setOverlayVisible(false); // Start zoom-through effect
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play(); // Play video after zoom-through
      }
    }, 2000); // Adjust timing to match zoom duration
  };

  const handleCloseClick = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video
      videoRef.current.currentTime = 0; // Reset video to start
    }
    setOverlayVisible(true); // Show overlay again
  };

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src="/4815784-hd_1920_1080_30fps.mp4" // Replace with your video path
        className={styles.video}
        muted
        loop
      />
      {overlayVisible && (
        <img
          src="/PalosVerdesEstates_TextLayer_1000x1000.png" // Path to overlay image
          alt="Interactive Overlay"
          className={`${styles.overlayImage} ${overlayVisible ? '' : styles.overlayImageZoom}`}
          onClick={handleOverlayClick} // Trigger zoom on click
        />
      )}
      {!overlayVisible && (
        <button className={styles.closeButton} onClick={handleCloseClick}>
          ✕
        </button>
      )}
    </div>
  );
};

export default InteractiveVideoOverlay;
