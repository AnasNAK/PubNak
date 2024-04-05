// HeroContent.tsx
import React from 'react';
import Button from '../../../common/button/Button';
import styles from './HeroContent.module.css';

const HeroContent: React.FC = () => {
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        The best offers is here just for a good experience
      </h1>
      <p className={styles.heroDescription}>
        Don't simply dummy text of the printing the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable.
      </p>
      <div className={styles.buttonContainer}>
        <Button variant="primary">Check Posts</Button>
        <Button variant="secondary">DRIX PARK 100% free</Button>
      </div>
    </div>
  );
};

export default HeroContent;