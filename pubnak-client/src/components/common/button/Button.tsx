// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const buttonStyles = `${styles.button} ${
    variant === 'primary' ? styles.primary : styles.secondary
  }`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;