import React from 'react';
import Link from 'next/link';
import Post from '../components/pages/post/post';
import withAuth from '@/utils/withAuth';



const post: React.FC = () => {
  return (
    <div >
      <Post />
     
    </div>
  );
};

export default withAuth(post);