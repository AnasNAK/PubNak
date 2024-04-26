import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/images/nak.jpg'


interface ConnectionProfileProps {
  profilePicture: string;
  mutualConnections: number;
}

const ConnectionProfile: React.FC<ConnectionProfileProps> = ({
  profilePicture,
  mutualConnections,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative">
        <Image
          src={profilePicture}
          alt="Profile Picture"
          className="w-16 h-16 rounded-full"
        
        />
      </div>
      <h3 className="text-lg font-bold mt-2 text-black">Influencer Profile</h3>
      <p className="text-gray-500">{mutualConnections} mutual connections</p>
    </div>
  );
};

const ConnectionsList: React.FC = () => {
  const connectionProfiles = [
    { profilePicture: `${logo}`, mutualConnections: 13 },
    { profilePicture:  `${logo}`, mutualConnections: 3 },
    { profilePicture:  `${logo}`, mutualConnections: 2 },
    { profilePicture:  `${logo}`, mutualConnections: 63 },
    { profilePicture:  `${logo}`, mutualConnections: 84 },
    { profilePicture:  `${logo}`, mutualConnections: 5 },
    { profilePicture:  `${logo}`, mutualConnections: 39 },
    { profilePicture:  `${logo}`, mutualConnections: 23 },
    { profilePicture:  `${logo}`, mutualConnections: 9 },
    { profilePicture:  `${logo}`, mutualConnections: 13 },
    { profilePicture:  `${logo}`, mutualConnections: 8 },
    { profilePicture:  `${logo}`, mutualConnections: 4 },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
              All
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
              Recently added
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
              Following
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search connections"
              className="bg-white px-4 py-2 rounded-lg w-80"
            />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Friend requests
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {connectionProfiles.map((profile, index) => (
            <ConnectionProfile
              key={index}
              profilePicture={profile.profilePicture}
              mutualConnections={profile.mutualConnections}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionsList;