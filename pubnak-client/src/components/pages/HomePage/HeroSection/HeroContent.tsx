// HeroContent.tsx
import React from 'react';
import Button from '../../../common/button/Button';
import styles from './HeroContent.module.css';
import Link from 'next/link';



const HeroContent: React.FC = () => {
  return (
    <div className=''>
      <h1 className={`${styles.goldmanBold} text-5xl space-y-9 text-white pt-24 text-center absolute z-[11] w-32 right-[8rem]`}>
        <span className='right-[11rem] absolute space-y-9'>
          <span className='text-black space-y-9'>The</span>
          &nbsp;best</span>
        <br />
        <span className=''> <span className=''>offers</span> <span>is here just for</span> <span>a&nbsp;good</span></span>
        <span className='right-[8.5rem] absolute py-8 '>
          <span className='text-black '>expe</span>
          rience</span>
      </h1>

      <div className='flex flex-col p-8'>
        <p className={`${styles.goldmanBold} font-bold text-5xl pt-24 w-3/6 flex flex-col  `}>
         <span className='text-2xl'>PubNak</span> Is The Best Solution For Your Promote
        </p>
        <p className={`${styles.jacques} font-sm text-xl w-8/12 `}>
          This platform is here for helps you to find the best influencer to promote your
           application or your services also your product if you have it .
        </p>
        <p className={`${styles.goldmanRegular} text-3xl my-3 pl-2`}>
        ORIX PARK
        </p>
        <div className={`${styles.goldmanRegular} flex gap-3  items-center `}>
          <p className='text-xl underline-offset-2 underline font-extrabold  '>100% Free</p>
          <Link href="/Login" className={`${styles.goldmanRegular} flex items-center gap-1 `}>Get It Now<i className="fa-solid fa-caret-right"></i></Link>
          
        </div>
      </div>
    </div>
  );
};

export default HeroContent;