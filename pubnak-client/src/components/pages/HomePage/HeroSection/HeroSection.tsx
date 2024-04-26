import React from 'react';
import Image from 'next/image';
import heroImage from '../../../../../public/images/hero-car.png';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-black w-full md:w-1/3 z-10 h-[40rem] md:h-[35rem]  md:float-end md:relative absolute top-0 left-0">
        <div
          className={`w-full md:w-[20rem] md:absolute top-[9rem] md:top-[8rem] right-[16rem] ${styles.heroImageContainer}`}
        >
          <Image src={heroImage} alt="Hero Image" className={styles.heroImage} />
        </div>
      </div>
      <HeroContent />
      <HeroStats />
    </section>
  );
};

export default HeroSection;