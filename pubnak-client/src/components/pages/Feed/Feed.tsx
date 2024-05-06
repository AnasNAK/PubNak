
import React from 'react';
import SideBar from '../../../components/layout/SideBar/SideBar';
import Navigation from '../../../components/common/Navigation/Navigation';
import Post from '../../../components/common/Post/Post';
import Calendar from '../../../components/common/Calendar/Calendar';
import ConnectionsList from '../../../components/common/ConnectionList/ConnectionList';

const Feed: React.FC = () => {
  return (
    <div>
      <SideBar title='PubNak' />
      <Navigation />
      <div className="max-w-7xl mx-auto pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        
        <div className="col-span-2 p-3">
          <h3 className='font-bold text-2xl pb-3'>Feed Page</h3>
          <Post
            author="John Doe"
            content="Share your thoughts..."
            timestamp="2 hours ago"
          />
          <Post
            author="Jane Smith"
            content="Excited to share my latest project! Check out this website I built for a local coffee shop."
            timestamp="4 hours ago"
          />
          <Post
            author="Bob Johnson"
            content="Looking for recommendations on the best productivity apps to help me stay focused and organized."
            timestamp="6 hours ago"
          />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Feed;