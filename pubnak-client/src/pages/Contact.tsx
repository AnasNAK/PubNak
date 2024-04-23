import React from 'react'
import ContactContent from '../components/pages/contact/Contact'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header';
import styles from '../styles/index.module.css';


const Contact: React.FC = () => {
    return (
        <div className={`${styles.bodyOverlay} min-h-screen`}>
            <Header />
            <ContactContent />
            <Footer />
        </div>
    )
}
export default Contact;