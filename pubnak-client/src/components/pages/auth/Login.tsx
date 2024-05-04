import React, { HTMLAttributes, useState } from 'react';
import styles from '../../../styles/index.module.css';
import Image from 'next/image';
import left from '../../../../public/images/signup-left.png';
import imgright from '../../../../public/images/singup-right.png';
import logo from '../../../../public/images/logo-filerouge-white 1.png';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '@/features/userSlice';
import { RootState, AppDispatch } from '@/store/store';
import { useRouter } from 'next/router';



interface SignInSectionProps { }

const LoginPage: React.FC<SignInSectionProps> = () => {

  const { isLoading, error } = useSelector((state: RootState) => state.user);
  
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    dispatch(LoginUser(userData))
    .then(() => {
      router.push('/Posts');
    })
    .catch(error => {
      console.error('Error occurred during login:', error);
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };


  return (
    <div className={`${styles.bodyOverlay} flex relative justify-center items-center h-screen `}>
      <div className=' w-[20rem] absolute z-[-1] top-12 right-[15rem]'>
        <Image src={imgright} alt='text' />
      </div>
      <div className=' w-[20rem] absolute z-[-1] bottom-12 left-[15rem]'>
        <Image src={left} alt='text' />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow-md p-8 w-full">
            <div className="flex items-center justify-center mb-6">
              <Image src={logo} alt='text' className='w-[9rem]' />

            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Log In</h3>
            <p className="text-gray-600 mb-6">Start connecting with influencers and clients</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block font-bold mb-2">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Enter a strong password"
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" className="text-gray-500 hover:text-gray-700" onClick={togglePasswordVisibility}>
                      <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>                    </button>
                  </div>
                </div>
                <Link href="/Register" className='text-m text-right float-right text-green-500 cursor-pointer underline my-3'>I Don&apos;t Have An Accout</Link>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Log in
              </button>
             
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
