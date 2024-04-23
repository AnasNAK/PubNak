import React from 'react';
import Image from 'next/image';
import heroImage from '../../../../../public/images/hero-car.png';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  
  return (
    <section className=''>

      <div className='bg-black w-1/3 z-10 h-[35rem] float-end relative '>

        <div className={` w-[300px]  absolute top-[9rem] right-[17rem]  ${styles.heroImageContainer}`} >
          <Image src={heroImage} alt="Hero Image" className={styles.heroImage} />
        </div>
      </div>
      <HeroContent />
      <HeroStats />
    </section>
  );
};

export default HeroSection;