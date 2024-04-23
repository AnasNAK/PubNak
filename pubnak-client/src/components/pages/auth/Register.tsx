import React from 'react';
import styles from '../../../styles/index.module.css';
import Image from 'next/image';
import Logo from '../../../../public/images/logo-filerouge-white 1.png'
import Link from 'next/link';

interface SignUpSectionProps {}

const SignUpSection: React.FC<SignUpSectionProps> = () => {
  return (
    <div className={`${styles.bodyOverlay} flex justify-center items-center h-screen `}>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full">
        <Image src={Logo} alt='logo' className='w-[9rem] m-auto'/>

        <h2 className="text-xl text-center font-bold text-gray-700 mb-2">Sign up</h2>
        <p className="text-gray-600 text-center mb-6">Join our influencer community today!</p>
        <div className="mb-4">
          <input type="text" placeholder="First Last" className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring  focus:ring-green-300" />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Choose a username" className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300" />
        </div>
        <div className="mb-4">
          <input type="password" placeholder="Set up your password" className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300" />
        </div>
     
        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-700">By signing up, you agree to our Terms and Privacy Policy.</span>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer transition duration-300 w-full hover:bg-green-600">
          Join
        </button>
        <Link href="/Login" className="m-auto mt-4 text-green-500 cursor-pointer"> Already a member? Log in</Link>
      </div>
    </div>
  );
};

export default SignUpSection;
