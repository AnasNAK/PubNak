import React from 'react';
// import Link from 'next/link';
import Header from '../components/layout/Header/Header';
import styles from '../styles/index.module.css';
import Footer from '../components/layout/Footer/Footer'
import AboutSec from '../components/pages/HomePage/NavigateSection/NavigateSection'

import HeroSection from '../components/pages/HomePage/HeroSection/HeroSection';
import withGuest from '@/utils/withGuest';


const HomePage: React.FC = () => {
  return (
    <div className={`${styles.bodyOverlay} min-h-screen`}>
      <Header />
      <HeroSection />
      <AboutSec />
      <Footer />

    </div>
  );
};

export default withGuest(HomePage,'/Posts');