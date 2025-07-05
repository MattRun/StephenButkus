import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './missionStatement.module.css';

const MissionStatement = () => (
  <div className={styles.missionContainer}>
    {/* Text Section */}
    <motion.div
      className={styles.textContainer}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.missionTitle}>Our Mission Statement</h2>
      <p className={styles.missionText}>
        At the <strong>Academy of Environmental Health & Safety (AEHS)</strong>, our mission is to <strong>empower</strong> and <strong>equip</strong> professionals in the <strong>Environmental Health and Safety (EHS)</strong> industry with <em>cutting-edge knowledge</em>, practical skills, and industry-standard certifications to ensure <strong>safer workplaces</strong>, sustainable practices, and <em>regulatory compliance</em>. We are committed to fostering an environment of <strong>excellence</strong> and <em>innovation</em>, where individuals are trained to meet the evolving challenges of the <strong>EHS field</strong>.
      </p>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className={styles.imageContainer}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/AEHSClassroom.png" // Replace with your image source
        alt="Mission Statement Image"
        layout="intrinsic"
        width={1920} // Replace with the actual image width
        height={1080} // Replace with the actual image height
        className={styles.missionImage}
      />
    </motion.div>
  </div>
);

export default MissionStatement;
