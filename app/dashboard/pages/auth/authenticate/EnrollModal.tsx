import React from 'react';
import styles from './EnrollModal.module.css';

interface EnrollModalProps {
  onClose: () => void;
}

export default function EnrollModal({ onClose }: EnrollModalProps) {
  const handlePurchase = () => {
    alert('Proceeding to purchase...');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>✕</button>
        <h2 className={styles.modalTitle}>Enroll in Course</h2>
        <p className={styles.modalText}>This course costs $148. Proceed to complete your purchase.</p>
        <button onClick={handlePurchase} className={styles.purchaseButton}>Purchase</button>
      </div>
    </div>
  );
}
