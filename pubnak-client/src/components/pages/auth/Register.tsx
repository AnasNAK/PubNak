import React, { useState } from 'react';
import styles from '../../../styles/index.module.css';
import Image from 'next/image';
import Logo from '../../../../public/images/logo-filerouge-white 1.png'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '@/features/userSlice';
import { RootState, AppDispatch } from '@/store/store';

interface SignUpSectionProps { }

const SignUpSection: React.FC<SignUpSectionProps> = () => {

  const { loading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Influencer'
  });

  const [showPassword, setshowPassword] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(RegisterUser(formData))
  };

  const togglePasswordVisibility =  () =>{

    setshowPassword(prevState => !prevState)

  }


  return (
    <div className={`${styles.bodyOverlay} flex justify-center items-center h-screen `}>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full">
        <Image src={Logo} alt='logo' className='w-[9rem] m-auto' />

        <h2 className="text-xl text-center font-bold text-gray-700 mb-2">Sign up</h2>
        <p className="text-gray-600 text-center mb-6">Join our influencer community today!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" name="name" placeholder="First Last" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring  focus:ring-green-300" />
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter a strong password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button type="button" className="text-gray-500 hover:text-gray-700" onClick={togglePasswordVisibility}>
                <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700">By signing up, you agree to our Terms and Privacy Policy.</span>
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer transition duration-300 w-full hover:bg-green-600">
            Join
          </button>
        </form>
        <Link href="/Login" className="m-auto mt-4 text-green-500 cursor-pointer"> Already a member? Log in</Link>
      </div>
    </div>
  );
};

export default SignUpSection;
