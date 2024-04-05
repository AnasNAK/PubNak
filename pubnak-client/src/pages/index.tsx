// src/pages/index.tsx

import React from 'react';
import Link from 'next/link';
import HeroSection from '../components/pages/HomePage/HeroSection/HeroSection';


const HomePage: React.FC = () => {
  return (
    <div>

      <HeroSection />
      
      <Link href="/ChatRoom">Go to Chat Room</Link>

    </div>
  );
};

export default HomePage;
