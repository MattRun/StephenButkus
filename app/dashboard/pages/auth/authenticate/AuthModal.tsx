// app/components/AuthModal.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AuthModal.module.css';

type AuthModalProps = {
  onClose: () => void;
};

export default function AuthModal({ onClose }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Sign-up flow
    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'An error occurred during registration.');
          return;
        }

        setSuccessMessage('Registration successful! Check your email to verify your account.');
        setTimeout(() => setIsSignUp(false), 3000);
      } catch (err) {
        setError('Failed to sign up. Please try again later.');
      }
    } else {
      // Sign-in flow
      try {
        const response = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401) {
            setError('Invalid email or password. Please try again.');
          } else {
            setError(data.message || 'An error occurred');
          }
          return;
        }

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);

        // Close modal after successful login
        onClose();
      } catch (err) {
        setError('Failed to sign in. Please try again later.');
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <Image src="/Authlogin.jpeg" alt="Auth Image" fill className={styles.image} />
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <button onClick={onClose} className={styles.closeButton}>Close</button>
          <h2 className={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          
          <form onSubmit={handleAuth}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type="submit" className={styles.authButton}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className={styles.toggleButton}
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
