import React from 'react';
import styles from '../HomePage/HeroSection/HeroContent.module.css'
import Image from 'next/image'
import AboutImg from '../../../../public/images/nak-about.png'

const AboutSection: React.FC = () => {
  return (
    <div className=" py-20">
      <div className="container m-auto px-4">
        <h2 className={`${styles.goldmanBold} text-4xl font-bold mb-8 text-center`}>About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10rem] w-full justify-between items-center">
          <div className="">
            <p className={`${styles.jacques} text-lg mb-4`}>
              At PubNak, we are dedicated to providing the best platform for connecting influencers and clients. Our mission is to facilitate seamless collaborations and foster mutually beneficial partnerships.
            </p>
            <p className={`${styles.jacques} text-lg mb-4`}>
              We understand the importance of effective promotion and marketing strategies in today's digital landscape. That's why we've created a comprehensive platform that brings together talented influencers and businesses seeking to reach their target audiences.
            </p>
          </div>
          <div className=" rounded-full w-[20rem] h-[20rem] shadow-md">
            <Image src={AboutImg} alt="About" className="w-[12rem] m-auto h-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;