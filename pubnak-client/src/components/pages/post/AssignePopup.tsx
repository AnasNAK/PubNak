import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInfluencers, updateSearchTerm } from '@/features/influencerSlice';
import {  assignPostToInfluencer } from '@/features/postSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Influencer } from '@/features/influencerSlice';

interface AssignPopupProps {
    postId: number;
    onClose: () => void;
}

const AssignPopup: React.FC<AssignPopupProps> = ({ postId, onClose }) => {
    const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const influencers = useSelector((state: RootState) => state.influencers.influencers);
    const searchTerm = useSelector((state: RootState) => state.influencers.searchTerm);

    useEffect(() => {
        dispatch(fetchInfluencers());
    }, [dispatch]);

    const filteredInfluencers = Array.isArray(influencers) ? influencers.filter((influencer) =>
        influencer.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    const handleAssign = () => {
        if (selectedInfluencer && selectedInfluencer.id) {
            dispatch(assignPostToInfluencer({ postId, assigned: selectedInfluencer.id }));
            onClose();
        } else {
            console.error('Please select an influencer');
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Assign Influencer</h2>
                    <span className="cursor-pointer" onClick={onClose}>&times;</span>
                </div>
                <input
                    type="text"
                    placeholder="Search influencers..."
                    value={searchTerm}
                    onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ul className="max-h-60 overflow-y-auto">
                    {filteredInfluencers.map((influencer) => (
                        <li key={influencer.id} onClick={() => setSelectedInfluencer(influencer)} className={`cursor-pointer py-2 px-4 rounded-lg ${selectedInfluencer === influencer ? 'bg-gray-100' : ''}`}>
                            <div className="flex items-center">
                                {influencer.profile_image && typeof influencer.profile_image === 'object' ? (
                                    <img
                                        src={`http://localhost/storage/${influencer.profile_image.path}`}
                                        alt="Profile Image"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                ) : (
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-user"></i>
                                    </div>
                                )}
                                <span>{influencer.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={handleAssign} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">Assign</button>
            </div>
        </div>
    );
};

export default AssignPopup;
