'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './main.module.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null); // Explicitly type as HTMLVideoElement

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play(); // TypeScript now recognizes play() as valid
      setIsPlaying(true); // Start fade-out animation
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const videoBounds = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - videoBounds.left - 40, // Center the button horizontally
      y: e.clientY - videoBounds.top - 40, // Center the button vertically
    });
  };

  return (
    <section className={styles.videoSectionContainer}>
      {/* Text Overlay */}
      <motion.div
        className={styles.textOverlay}
        initial={{ opacity: 1 }}
        animate={{ opacity: isPlaying ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Over a 1,000,000</h2>
        <h1>Samples Tested</h1>
      </motion.div>

      {/* Video and Play Button */}
      <div
        className={styles.videoWrapper}
        onMouseMove={handleMouseMove} // Track mouse movement for the play button
      >
        <video ref={videoRef} className={styles.video} controls={isPlaying}>
          <source src="/AEHSFinalVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button */}
        {!isPlaying && (
          <motion.div
            className={styles.playButton}
            onClick={handlePlayClick}
            style={{ left: cursorPos.x, top: cursorPos.y }} // Dynamically set position based on cursor
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Play
          </motion.div>
        )}
      </div>

      {/* Explore Link */}
      {/* <div className={styles.exploreLink}>
        <a href="/dashboard/pages/about/pinnaclelaboratory">Explore →</a>
      </div> */}
    </section>
  );
};

export default VideoSection;
