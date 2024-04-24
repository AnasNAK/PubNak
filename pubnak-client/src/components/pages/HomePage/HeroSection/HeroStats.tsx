// HeroStats.tsx
import React from 'react';
import styles from './HeroContent.module.css';
import Image from 'next/image';
import hero2 from '../../../../../public/images/hero-2.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeroStats: React.FC = () => {

  return (

    <div>
      <div className={`relative h-[100vh]`}>
        <Image className='absolute bg-cover ' src={hero2} alt='wavey image' />


        <div className='flex absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 justify-center items-center text-6xl z-10'>
          <div className={`flex gap-2 justify-center items-center`}>
            <span className={`${styles.goldmanRegular} font-extrabold text-8xl`} style={{ color: 'white', WebkitTextStroke: '2px rgba(145, 255, 0, 0.422)' }}>73</span>
            <span className={`${styles.goldmanBold} text-4xl`}>User</span>
          </div>
          <div className={`flex gap-2 justify-center items-center`}>
            <span className={`${styles.goldmanRegular} font-extrabold text-8xl`} style={{ color: 'white', WebkitTextStroke: '2px rgba(145, 255, 0, 0.422)' }}>73</span>
            <span className={`${styles.goldmanBold} text-4xl`}>influencer</span>
          </div>
          <div className={`flex gap-2 justify-center items-center`}>
            <span className={`${styles.goldmanRegular} font-extrabold text-8xl`} style={{ color: 'white', WebkitTextStroke: '2px rgba(145, 255, 0, 0.422)' }}>12,500+</span>          <span className={`${styles.goldmanBold} text-4xl`}>interact with platform</span>
          </div>
        </div>



      </div>
      <div className='absolute w-full flex  flex-col justify-center items-center'>
        <p className={`${styles.goldmanRegular} w-3/5 text-center text-2xl`}>
          That is the best platform you need to use
          to get your own service and also to find your
          ifluencer and if you are a influencer you want money
          for promotion this is the best place
        </p>
        <Link href="/Feed">
          <div className={`cursor-pointer ${styles.goldmanRegular} bg-black text-white mt-5  hover:bg-white hover:text-black hover:border-black border-2 border-transparent py-2 px-4 rounded-md hover:scale-110  hover:shadow-md duration-300 transition-all`} style={{  WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>
            Check Posts
          </div>
        </Link>

      </div>
    </div>
  );
};

export default HeroStats;