// HeroSection.tsx
import React from 'react';
import Image from 'next/image';
// import heroImage from '../../assets/hero-image.png';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        {/* <Image src={heroImage} alt="Hero Image" className={styles.heroImage} /> */}
      </div>
      <HeroContent />
      <HeroStats />
    </section>
  );
};

export default HeroSection;