// pages/password.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/PasswordForm.module.css';

export default function PasswordForm() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const correctPassword1 = '2009satoshi';  // replace this with your desired password
  const correctPassword2 = '2009Satoshi';  // replace this with your desired password


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword1 || password === correctPassword2) {
      router.push('/congrats');
    } else {
      // handle incorrect password
      alert('Incorrect password. Please try again.')
      setPassword('');
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.boldText}>Final Password</div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
          autoComplete="something-password" // set autoComplete to "new-password"
        />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}