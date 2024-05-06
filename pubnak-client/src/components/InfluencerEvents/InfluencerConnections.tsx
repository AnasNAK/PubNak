import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchRandomInfluencers } from '@/features/influencerSlice';
import { AppDispatch, RootState } from '@/store/store';

const InfluencerConnections: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { influencers } = useSelector((state: RootState) => state.influencers);

  useEffect(() => {
    dispatch(fetchRandomInfluencers());
  }, [dispatch]);

  const handleInfluencerClick = (id: number) => {
    router.push({
      pathname: '/ProfileInfluencer',
      query: { id: id },
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md fixed h-full right-0 mt-[-1rem] z-[10]">
      <h2 className="text-lg font-bold mb-4">Random Picks</h2>
      <div className="space-y-4">
        {influencers.map((influencer) => (
          <div key={influencer.id} onClick={() => handleInfluencerClick(influencer.id)} className="flex items-center bg-gray-400 p-2 rounded-xl space-x-6 cursor-pointer">
            <div>
              {typeof influencer.profile_image === 'string' ? (
                <img src={`http://localhost/storage/${influencer.profile_image}`} alt={influencer.name} className="w-12 h-12 rounded-full mr-4 cursor-pointer" />
              ) : influencer.profile_image ? (
                <img src={`http://localhost/storage/${influencer.profile_image.path}`} alt={influencer.name} className="w-12 h-12 rounded-full mr-4 cursor-pointer" />
              ) : (
                <div className="w-12 h-12 rounded-full mr-4 bg-gray-300 flex justify-center items-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold">{influencer.name}</h3>
              <p className="text-gray-500">{influencer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerConnections;
