'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './accountpage.module.css';

export default function AccountPage() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+123 456 7890');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('2000-01-01');

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = URL.createObjectURL(event.target.files[0]);
      setProfilePicture(file);
    }
  };

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
  };

  return (
    <div className={styles.container}>
      {/* Main Navigation Sidebar */}
      <aside className={styles.mainSidebar}>
        <h2 className={styles.logo}>AEHS</h2>
        <nav className={styles.nav}>
          <Link href="/dashboard/pages/auth/portal/dashboard" className={styles.navItem}>Dashboard</Link>
          <Link href="/dashboard/pages/auth/portal/courses" className={styles.navItem}>Courses</Link>
          <Link href="/dashboard/pages/auth/portal/notifications" className={styles.navItem}>Notifications</Link>
          <Link href="/dashboard/pages/auth/portal/account" className={`${styles.navItem} ${styles.active}`}>Account</Link>
        </nav>
      </aside>

      {/* Account Settings Sidebar */}
      <aside className={styles.accountSidebar}>
        <nav className={styles.accountNav}>
          <button className={styles.accountNavItem}>Profile Base</button>
          <button className={styles.accountNavItem}>Notification Settings</button>
          <button className={styles.accountNavItem}>Password</button>
          <button className={styles.logout}>Log Out</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Account Settings</h1>

        <div className={styles.profileSection}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Birthday</label>
            <input type="date" className={styles.input} value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone Number</label>
            <input type="text" className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Bio</label>
            <textarea className={styles.input} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Type something about you" />
          </div>

          {/* Profile Picture Section */}
          <div className={styles.profilePictureSection}>
            <label className={styles.label}>Profile Picture</label>
            <div className={styles.profilePictureWrapper}>
              {profilePicture ? (
                <Image src={profilePicture} alt="Profile Picture" width={80} height={80} className={styles.profilePicture} />
              ) : (
                <div className={styles.defaultPicture}>Upload Image</div>
              )}
              <input type="file" onChange={handleProfilePictureChange} className={styles.uploadButton} />
              <button className={styles.deleteButton} onClick={() => setProfilePicture(null)}>Delete Avatar</button>
            </div>
          </div>

          {/* Save Button */}
          <button onClick={handleSaveChanges} className={styles.saveButton}>Save Changes</button>
        </div>
      </main>
    </div>
  );
}
