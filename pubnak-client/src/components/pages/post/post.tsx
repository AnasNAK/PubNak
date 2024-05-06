import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '@/features/postListSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Nvigation from '../../common/Navigation/Navigation';
import Header from '../../layout/SideBar/SideBar';
import InfluencerEvents from '../../InfluencerEvents/InfluencerEvents';
import InfluencerConnections from '../../InfluencerEvents/InfluencerConnections';
import Image from 'next/image';
import { AppDispatch, RootState } from '@/store/store';
import AssignPopup from './AssignePopup';
import { Console } from 'console';
import { addToFav, fetchMyFav } from '@/features/FavouritSlice'

const Posts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isSaved, setIsSaved] = useState(false);


    const handleToggleSave = async (postId: number) => {
        try {
            await dispatch(addToFav(postId));

            await dispatch(fetchMyFav());

        } catch (error) {
            console.error('Failed to save post:', error);
        }
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [postIdForPopup, setPostIdForPopup] = useState(Number);
    const [searchTerm, setSearchTerm] = useState('');
    const { posts, status, error } = useSelector((state: RootState) => state.postsList);
    const { user } = useSelector((state: RootState) => state.user);
    const { favorites } = useSelector((state: RootState) => state.favorites);

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchMyFav());
    }, [dispatch]);


    const openPopup = (postId: number) => {
        setIsPopupOpen(true);
        setPostIdForPopup(postId);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }


    const filteredPosts = posts.filter(post =>
        post.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div className="">
            <Header title="PubNak" />
            <div className="flex-1 bg-gray-100 p-4 relative z-0">
                <Nvigation />
                <div className="grid grid-cols-8 gap-4 mt-12">
                    <div className="col-span-4 flex flex-col gap-10">
                        <div className='flex justify-between '>
                            <h2 className="text-2xl font-bold mb-2">Recent Posts</h2>

                            <input
                                type="text"
                                placeholder="Search for post by title or category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-2/4 px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400"
                            />

                        </div>

                        {status === 'loading' ? (
                            <div>Loading...</div>
                        ) : (
                            filteredPosts.map((post) => (
                                <div key={post.id} className="bg-gray-200 p-3 rounded-lg">
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className=" text-white rounded-full p-2 mr-2">
                                                {post.client.profile_image ? (
                                                    <img
                                                        src={`http://localhost/storage/${post.client.profile_image.path}`}
                                                        alt="Profile Image"
                                                        className="w-8 h-8 rounded-full mr-2"
                                                    />
                                                ) : (
                                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                                        <i className="fa fa-user"></i>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-gray-500">{post.client.name}</p>
                                                <p className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`flex items-center bg-gray-300 px-2 py-1 rounded-xl ${post.assigned_post ? 'cursor-not-allowed' : user.id === post.client.id ? 'cursor-pointer' : 'cursor-not-allowed'
                                                }`}
                                            onClick={() => user.id === post.client.id && !post.assigned_post && openPopup(post.id)}
                                        >
                                            <div className="text-white rounded-full p-2 mr-2">
                                                <i className="fa fa-exchange text-gray-700"></i>
                                            </div>
                                            <p className="text-gray-500">
                                                {post.assigned_post ? `Assigned to ${post.assigned_post.name}` : user.id === post.client.id ? 'Assigned' : 'Assignee'}
                                            </p>
                                        </div>


                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col gap-1">
                                            <p className="font-bold">{post.title}</p>
                                            <p>{post.content}</p>
                                        </div>
                                        <div className="mt-4 grid grid-cols-3 gap-4 w-full">
                                            {post.images && post.images.length > 0 ? (
                                                post.images.map((image, index) => (
                                                    <div key={index} className="rounded-lg p-4 text-center w-full">
                                                        <img
                                                            src={`http://localhost/storage/${image.path}`}
                                                            alt={`Post ${post.id} Image ${index}`}
                                                            width={200}
                                                            height={200}
                                                            className='w-full h-auto'
                                                        />
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-500">No images for this post</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="flex items-center cursor-pointer">

                                            <div>
                                                {user.role === 'Influencer' && (
                                                    <button onClick={() => handleToggleSave(post.id)} className="flex items-center space-x-2 py-4 text-gray-500 hover:text-red-500">
                                                        {favorites.find((favorite) => favorite && favorite.id === post.id) ? (
                                                            <FaHeart className="text-red-500" />
                                                        ) : (
                                                            <FaRegHeart />
                                                        )}
                                                        <p className="text-gray-500">Save Post</p>
                                                    </button>
                                                )}



                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        )}
                    </div>

                    <div className="col-span-2">
                        <InfluencerEvents />
                    </div>
                        <InfluencerConnections />
                   
                </div>
            </div>
            {isPopupOpen && (
                <AssignPopup postId={postIdForPopup} onClose={closePopup} />
            )}
        </div>
    );
};

export default Posts;