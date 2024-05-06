import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { ProfileImage, Influencer } from '@/features/influencerSlice';
import styles from '@/styles/index.module.css';


interface ProfileOverviewProps {
  id: string;
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ id }) => {
  const influencers = useSelector((state: RootState) => state.influencers.influencer);

  if (!Array.isArray(influencers)) {
    return null;
  }

  const influencer: Influencer | undefined = influencers.find((influencer) => influencer.id === Number(id));

  if (!influencer) {
    return null;
  }

  const { name, email, instagram, youtube, profile_image } = influencer;

  const profileImage = profile_image as ProfileImage;

  const imageUrl = profileImage ? `http://localhost/storage/${profileImage.path}` : '';

  return (
    <div className={`${styles.bodyOverlay} py-8`}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Profile Picture"
              className="w-32 h-32 rounded-full border-2 border-gray-300"
            />
          )}
        </div>
        <h2 className="text-2xl font-bold mt-4 text-black">{name}</h2>
        <p className="text-black">{email}</p>
        <div className="mt-4 flex ">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-purple-500 mr-2 w-16 h-16  hover:text-purple-700 transition-all" />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500 w-16 h-16 hover:text-red-700 transition-all" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
