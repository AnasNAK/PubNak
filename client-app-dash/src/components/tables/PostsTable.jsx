import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, archivePost } from '../../features/postSlice';

function TablePost() {
    const dispatch = useDispatch();
    const { postList, loading, error } = useSelector((state) => state.Post);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleArchive = (postId) => {
        console.log(postId);
        dispatch(archivePost(postId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='grid grid-cols-5 '>

            <div className='col-span-1'></div>
            <div className="p-4 bg-lightgreen-200 text-black text-center col-span-4 ">
                <h2 className="text-2xl font-bold mb-4">Posts</h2>
                <table className="w-full">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="py-2">Title</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postList.map((post) => (
                            <tr key={post.id} className="bg-white">
                                <td className="py-2">{post.title}</td>
                                <td className="py-2">{post.category.name}</td>
                                <td className="py-2">
                                    {post.status ? (
                                        <button onClick={() => handleArchive(post.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Disarchive</button>
                                    ) : (
                                        <button onClick={() => handleArchive(post.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Archive</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablePost;
