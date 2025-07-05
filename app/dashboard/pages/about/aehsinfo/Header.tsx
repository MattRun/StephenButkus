import Image from 'next/image';
import styles from './about.module.css';

const Header = () => (
  <div className={`${styles.headerContainer}`}>
    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">
      <div className="space-y-4">
        <h1 className={styles.headerTitle}>About Us</h1>
        <p className={styles.headerSubtitle}>Building a safer tomorrow with the experts in our field</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/AEHS_Logo.png" alt="About Image" width={400} height={300} className="object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
);

export default Header;
