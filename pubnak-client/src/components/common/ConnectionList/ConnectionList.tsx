import React from 'react';
import Image from 'next/image';


interface ConnectionProps {
  name: string;
  imageSrc: string;
}

const Connection: React.FC<ConnectionProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex items-center mb-2">
      <Image
        src={imageSrc}
        alt={name}
        className="w-8 h-8 rounded-full mr-2"
      />
      <span>{name}</span>
    </div>
  );
};

const ConnectionsList: React.FC = () => {
  const connections = [
    { name: 'John Doe', imageSrc: '/user1.png' },
    { name: 'Jane Smith', imageSrc: '/user2.png' },
  ];

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">Connections</h3>
      {connections.map((connection, index) => (
        <Connection
          key={index}
          name={connection.name}
          imageSrc={connection.imageSrc}
        />
      ))}
    </div>
  );
};

export default ConnectionsList;