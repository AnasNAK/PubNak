import React, { useState } from 'react';
import bg from '@/styles/index.module.css';

const Profile: React.FC = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        youtubeLink: '',
        instagramLink: '',
    });
    const [profilePicture, setProfilePicture] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Profile Information:', userData);
        console.log('Profile Picture:', profilePicture);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.id]: e.target.value });
    };

    const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePicture(e.target.files[0]);
        }
    };
    return (
        <div className='w-full '>
            <div className="bg-white w-full flex flex-col justify-center items-center mt-16 ">
                <div className="group bg-white relative w-56 h-56 rounded-full overflow-hidden relative">
                    <img
                        src={profilePicture ? URL.createObjectURL(profilePicture) : 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                    <label
                        htmlFor="profile-picture"
                        className="opacity-0 absolute bottom-[35%] left-[35%] bg-green-500 text-white rounded-full p-2 cursor-pointer group-hover:bg-green-600 group-hover:opacity-100  transition-all duration-300"
                    >
                        <input
                            type="file"
                            id="profile-picture"
                            accept="image/*"
                            className="hidden "
                            onChange={handleProfilePictureChange}
                        />
                        <svg className="w-12 h-12   " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                </div>
                <div className="bg-white rounded-b-lg  p-6 w-3/5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-black font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={userData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-black font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="youtubeLink" className="block text-black font-bold mb-2">
                                YouTube Link
                            </label>
                            <input
                                type="text"
                                id="youtubeLink"
                                value={userData.youtubeLink}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="instagramLink" className="block text-black font-bold mb-2">
                                Instagram Link
                            </label>
                            <input
                                type="text"
                                id="instagramLink"
                                value={userData.instagramLink}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div className='w-full flex justify-center items-center '>
                            <button
                                type="submit"
                                className="px-14 font-bold bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300  "
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;