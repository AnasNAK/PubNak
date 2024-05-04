import React from 'react';
import Image from 'next/image'
import profilPic from '../../../../public/images/nak.jpg'

const ProfileOverview: React.FC = () => {
  return (
    <div className="bg-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative">
          <Image
            src={profilPic}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-black">Influencer Profile</h2>
        <p className="text-gray-500">20 connections</p>
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2">
            Review
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Negotiate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;