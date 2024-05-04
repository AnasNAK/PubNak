import React from 'react';
import Nvigation from '../../common/Navigation/Navigation';
import Header from '../../layout/SideBar/SideBar';
import InfluencerEvents from '../../InfluencerEvents/InfluencerEvents';
import InfluencerDeals from '../../InfluencerEvents/InfluencerDeals';
import InfluencerConnections from '../../InfluencerEvents/InfluencerConnections';
import Image from 'next/image';
import heroImage from '../../../../public/images/hero-car.png';

const posts: React.FC = () => {
    return (
        <div className="">
            <Header title='PubNak' />
            <div className="flex-1 bg-gray-100 p-4 relative z-0">
                <Nvigation />
                <div className="grid grid-cols-8 gap-4 mt-12">
                    <div className="col-span-4 flex flex-col gap-10">
                        {/* Add content for the main area */}
                        <h2 className="text-2xl font-bold mb-2">Recent Posts</h2>
                        {/* <div className="mb-4">
                            <ul className="flex space-x-2">
                                <li className="bg-green-500 text-white px-2 py-1 rounded-lg">Product Promotion</li>
                                <li className="bg-green-500 text-white px-2 py-1 rounded-lg">Event Planning</li>
                                <li className="bg-black text-white px-2 py-1 rounded-lg">Client Meeting</li>
                                <li className="bg-black text-white px-2 py-1 rounded-lg">Recommended Eateries</li>
                                <li className="bg-black text-white px-2 py-1 rounded-lg">Top Restaurant Picks</li>
                                <li className="bg-black text-white px-2 py-1 rounded-lg">Food Establishment</li>
                            </ul>
                            </div> */}

                        <div className=' bg-gray-200 p-3 rounded-lg  '>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">Anas NAKHLI</p>
                                        <p className="text-gray-500">Added on 2024/18/04</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-exchange"></i>
                                    </div>
                                    <p className="text-gray-500">Assignee</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>

                                <div className='flex flex-col gap-1 '>
                                    <p className='font-bold'>Descripion</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Perspiciatis sint deserunt recusandae voluptatum asperiores
                                        natus pariatur blan</p>
                                </div>


                                <div className="mt-4 grid grid-cols-5 gap-4">
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center cursor-pointer">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">save Post</p>

                                    </div>
                                </div>
                                <div className="flex items-center">

                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2 flex flex-col justify-center items-center cursor-pointer">
                                        <i className="fa fa-share"></i>  <p>negociate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-gray-200 p-3 rounded-lg'>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">anas nakhli</p>
                                        <p className="text-gray-500">added on 2024/18/04</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-exchange"></i>
                                    </div>
                                    <p className="text-gray-500">assignee</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>

                                <div className='flex flex-col gap-1 '>
                                    <p className='font-bold'>Descripion</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Perspiciatis sint deserunt recusandae voluptatum asperiores
                                        natus pariatur blan</p>
                                </div>


                                <div className="mt-4 grid grid-cols-5 gap-4">
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center cursor-pointer">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">save Post</p>

                                    </div>
                                </div>
                                <div className="flex items-center">

                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2 flex flex-col justify-center items-center cursor-pointer">
                                        <i className="fa fa-share"></i>  <p>negociate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-gray-200 p-3 rounded-lg'>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">anas nakhli</p>
                                        <p className="text-gray-500">added on 2024/18/04</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-exchange"></i>
                                    </div>
                                    <p className="text-gray-500">assignee</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>

                                <div className='flex flex-col gap-1 '>
                                    <p className='font-bold'>Descripion</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Perspiciatis sint deserunt recusandae voluptatum asperiores
                                        natus pariatur blan</p>
                                </div>


                                <div className="mt-4 grid grid-cols-5 gap-4">
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                    <div className=" rounded-lg p-4 text-center">
                                        <Image src={heroImage} alt="Hero Image" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center cursor-pointer">
                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2">
                                        <i className="fa fa-heart"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">save Post</p>

                                    </div>
                                </div>
                                <div className="flex items-center">

                                    <div className="bg-green-500 text-white rounded-full p-2 mr-2 flex flex-col justify-center items-center cursor-pointer">
                                        <i className="fa fa-share"></i>  <p>negociate</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='col-span-2'>
                        <InfluencerEvents />
                        {/* <InfluencerDeals /> */}
                        {/* <InfluencerConnections />
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Promotion</h2>
                            <img src="/promotion.jpg" alt="Promotion" className="rounded-lg shadow-md" />
                            <p className="text-gray-500 mt-2">Promotion Alert</p>
                            <p className="text-gray-500">Exclusive discounts for influencers</p>
                        </div> */}
                    </div>
                    <div className='col-span-2'>

                        <InfluencerConnections />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default posts;