import React from 'react';
import Image from 'next/image'
import AboutImg from '../../../../../public/images/about-section.png'
import Logo from '../../../../../public/images/logo-filerouge-white 1.png'
import styles from '../HeroSection/HeroContent.module.css'


const NavigateSection: React.FC = () => {



    return (
        <div className="mt-[11rem]">
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                
                <div className="relative">
                  <Image
                    src={AboutImg}
                    alt="Profile Art"
                    className="w-[20rem] h-auto "
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
                <Image src={Logo} alt='logo' className='w-[130px]' />
              <h2 className={`${styles.goldmanBold} text-3xl font-bold mb-4 text-black`}>About Publication</h2>
              <p className={`${styles.jacques} text-gray-700 mb-8`}>
                The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. 
              </p>
              <div className="flex flex-wrap ">
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Games</div>
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Mobile app design</div>
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Programming</div>
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Facebook</div>
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Instagram</div>
                <div className={`${styles.goldmanRegular} bg-black text-white px-4 py-2 mr-4 mb-4 rounded-full`} style={{ color: 'white', WebkitTextStroke: '1px rgba(145, 255, 0, 0.422)' }}>Youtube</div>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    )

}
export default NavigateSection
