'use client';

import styles from './Button.module.scss';

interface ButtonProps {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Button({ text = 'Button', isActive = false, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
