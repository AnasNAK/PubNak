

import React from 'react';
import RootLayout from '../components/layout/RootLayout'; 

const ChatRoom: React.FC = () => {
  return (
    <RootLayout> {/* Use RootLayout as the layout component */}
      <div>
        <h1>Chat Room</h1>
        <div>
          {/* Chat messages will be displayed here */}
        </div>
        <form>
          <input type="text" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </RootLayout>
  );
};

export default ChatRoom;
