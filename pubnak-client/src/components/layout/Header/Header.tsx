import React, { useEffect, useState } from 'react';
import LogoImage from '../../../../public/images/logo-filerouge-white 1.png';
import styles from './Header.module.css'; 
import Link from 'next/link';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed   top-0 left-0 right-0 z-[100] py-4 bg-opacity-50 backdrop-filter  backdrop-blur-lg transition duration-500 ${scrollY > 0 ? 'bg-white' : 'bg-transparent'}`}>
      <div className={`container mx-auto flex items-center justify-between font-bold px-4 ${styles.fontGoldman}`}>
        <div>
          <img src={LogoImage.src} alt="Logo" className="h-8" />
        </div>
        <div>
          <ul className="flex space-x-6  ">
            <li><Link href="/" className="text-gray-300 hover:text-gray-400 ">HOME</Link></li>
            <li><Link href="/About" className="text-gray-300 hover:text-gray-400">ABOUT</Link></li>
            <li><Link href="/Contact" className="text-gray-300 hover:text-gray-400">CONTACT US</Link></li>
          </ul>
        </div>
        <div className=''>
          <ul className="flex space-x-6 ml-8">
            <li><Link href="/Login" className="text-gray-300 hover:text-gray-400">LOGIN </Link></li>
            <li><Link href="/Register" className="text-gray-300 hover:text-gray-400">REGISTER</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
