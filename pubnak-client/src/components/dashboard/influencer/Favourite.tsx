import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, fetchMyFav } from '@/features/FavouritSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Favorite } from '@/features/FavouritSlice'

const Favourite: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { favorites } = useSelector((state: RootState) => state.favorites);

    const handleToggleSave = (postId: number) => {
        dispatch(addToFav(postId));
    };
    useEffect(() => {
        dispatch(fetchMyFav());
    }, [dispatch]);


    return (
        <div className="grid mt-14  grid-cols-4 min-h-screen bg-white">

            <div className="col-span-1"></div>
            <div className="col-span-3">


                <div className=" w-full grid grid-cols-2  ">
                    {favorites.length > 0 ? (
                        favorites.map((favorite: Favorite) => (
                            <div key={favorite.id} className="w-3/4 mb-4 bg-gray-200 p-3 rounded-lg">
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className=" text-white rounded-full p-2 mr-2">
                                            {favorite.client && favorite.client.profile_image ? (
                                                <img
                                                    src={`http://localhost/storage/${favorite.client.profile_image.path}`}
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
                                            <p className="text-gray-500">{favorite.client && favorite.client.name}</p>
                                            <p className="text-gray-500">{new Date(favorite.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold">{favorite.title}</p>
                                        <p>{favorite.content}</p>
                                    </div>
                                    <div className="mt-4 grid grid-cols-3 gap-4 w-full">
                                        {favorite.images && favorite.images.length > 0 ? (
                                            favorite.images.map((image, index) => (
                                                <div key={index} className="rounded-lg p-4 text-center w-full">
                                                    <img
                                                        src={`http://localhost/storage/${image.path}`}
                                                        alt={`Post ${favorite.id} Image ${index}`}
                                                        width={200}
                                                        height={200}
                                                        className="w-full h-auto"
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
                                            <button onClick={() => handleToggleSave(favorite.id)} className="flex items-center space-x-2 py-4 text-gray-500 hover:text-red-500">
                                                <FaHeart className="text-red-500" />
                                                <p className="text-gray-500">Remove from Favorites</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    ) : (
                        <p className='text-center mt-48 text-xl'>You don't have any favorite posts :) </p>
                    )}
                </div>
            </div>

        </div>

    );
};

export default Favourite;