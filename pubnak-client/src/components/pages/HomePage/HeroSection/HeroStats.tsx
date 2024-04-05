// HeroStats.tsx
import React from 'react';
import styles from './HeroStats.module.css';

const HeroStats: React.FC = () => {
  return (
    <div className={styles.heroStats}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>73</span>
        <span className={styles.statLabel}>User</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>73</span>
        <span className={styles.statLabel}>influencer</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>12,500+</span>
        <span className={styles.statLabel}>interact with platform</span>
      </div>
    </div>
  );
};

export default HeroStats;