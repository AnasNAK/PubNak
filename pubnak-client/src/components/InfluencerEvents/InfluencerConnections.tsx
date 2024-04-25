import React from 'react';
import Image from 'next/image';


interface InfluencerConnectionProps {
  name: string;
  role: string;
  avatar: string;
}

const InfluencerConnection: React.FC<InfluencerConnectionProps> = ({ name, role, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <Image src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-sm font-bold">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const InfluencerConnections: React.FC = () => {
  const connections = [
    { name: 'Influencer Name', role: 'Reviewing client posts', avatar: '/avatar1.png' },
    { name: 'Client Name', role: 'Negotiating prices', avatar: '/avatar2.png' },
    { name: 'Influencer Name', role: 'Negotiating prices', avatar: '/avatar3.png' },
    { name: 'Client Name', role: 'Negotiating prices', avatar: '/avatar4.png' },

  ];

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md fixed h-full right-0 mt-[-1rem] z-[-1]">
      <div className='flex justify-between items-center'>
        <h2 className="text-lg font-bold mb-4">Connections</h2>
        <p className="text-gray-500 mb-4 text-right font-bold">20</p>
      </div>
      <h2 className="text-lg font-bold mb-4">Networks</h2>

      <div className="space-y-4">
        {connections.map((connection, index) => (
          <InfluencerConnection
            key={index}
            name={connection.name}
            role={connection.role}
            avatar={connection.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerConnections;
