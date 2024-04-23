import React from 'react'
import AboutContent from '../components/pages/about/About'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header';
import styles from '../styles/index.module.css';

 const About:React.FC = () => {
  return (
    <div className={`${styles.bodyOverlay} min-h-screen`}>
        <Header />
        <AboutContent />
        <Footer />
    </div>
  )
}
export default About;