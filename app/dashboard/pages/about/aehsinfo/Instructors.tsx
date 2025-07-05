import Image from 'next/image';
import styles from './instructors.module.css';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { FaLaptopCode } from 'react-icons/fa';

const Instructors = () => (
  <div className={styles.instructorContainer}>
    <div className={styles.textSection}>
      <h1 className={styles.headerTitle}>About Our President</h1>
      <p className={styles.headerSubtitle}>
        Jon Massey founded the Academy of Environmental Health & Safety in response to the growing need for comprehensive training in the field.
        With a background in <strong>environmental science</strong> and <strong>public health</strong>, Jon has committed himself to educating future
        leaders in the EHS industry. His mission is to provide accessible, high-quality education to professionals across the nation.
      </p>

      <div className={styles.iconsSection}>
        <div className={styles.iconContainer}>
          <AcademicCapIcon className={styles.icon} />
          <h3 className={styles.iconTitle}>TRAINING FACILITY</h3>
          <p className={styles.iconText}>
            Cutting-edge equipment designed for advanced environmental analysis and reporting.
          </p>
        </div>
        <div className={styles.iconContainer}>
          <FaLaptopCode className={styles.icon} />
          <h3 className={styles.iconTitle}>ONLINE PROGRAMS</h3>
          <p className={styles.iconText}>
            Flexible online training to gain essential knowledge and certifications from home, fully compliant with CDPH guidelines.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.imageSection}>
      <Image
        src="/Jon.png"
        alt="Jon Massey - President"
        layout="intrinsic"
        width={400}
        height={600}
        className={styles.image}
      />
      <div className={styles.quoteBlock}>
        <p className={styles.quote}>
          <em>"Our goal is to foster a safer and more sustainable future through quality education and rigorous standards."</em>
        </p>
      </div>
    </div>
  </div>
);

export default Instructors;
