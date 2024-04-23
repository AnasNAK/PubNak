import React from 'react';

const InfluencerDeals: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Influencer Deals</h2>
      <ul className="space-y-2">
        <li>Brand Promoters</li>
        <li>Marketing Experts</li>
        <li>Business Partners</li>
        <li>Promotional</li>
        {/* Add more deal categories */}
      </ul>
    </div>
  );
};

export default InfluencerDeals;