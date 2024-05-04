import React from 'react';
import Image from 'next/image';


interface PostProps {
  author: string;
  content: string;
  timestamp: string;
  // images?: string[];
}

const Post: React.FC<PostProps> = ({ author, content, timestamp,  }) => { //images
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        {/* <Image
          // src="/user-avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full mr-2"
        /> */}
        <span className="font-semibold">{author}</span>
        <span className="text-gray-500 text-sm ml-2">{timestamp}</span>
      </div>
      <p>{content}</p>
      {/* {images && (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Post Image ${index}`} className="w-full h-24 object-cover rounded" />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Post;