

import React from 'react';
import RootLayout from '../components/layout/RootLayout'; 
import withAuth from '../utils/withAuth';

const ChatRoom: React.FC = () => {
  return (
    <RootLayout>
      <div>
        <h1>Chat Room</h1>
        <div>
        
        </div>
        <form>
          <input type="text" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </RootLayout>
  );
};

export default withAuth(ChatRoom);
