import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, updatePost, deletePost } from '@/features/postSlice';
import { fetchCategories } from '@/features/categorySlice';
import { AppDispatch, RootState } from '@/store/store';
import { Post } from '@/types/interfaces';

const PostComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts } = useSelector((state: RootState) => state.posts);
  const { categoryList } = useSelector((state: RootState) => state.category);

  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const [showUpdatePostForm, setShowUpdatePostForm] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  const [newPostData, setNewPostData] = useState<Partial<Post>>({
    title: '',
    content: '',
    category: '',
    images: [],
  });




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPostData({
      ...newPostData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setNewPostData({
        ...newPostData,
        images: [...newPostData.images!, ...fileArray],
      });
    }
  };

  const handleSubmitAddPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const { id, ...postData } = newPostData;
  
    dispatch(addPost(postData as Post));
    setNewPostData({
      title: '',
      content: '',
      category: '',
      images: [],
    });
    setShowAddPostForm(false);
  };
  

  const handleDeletePost = (postId?: number) => {
    if (postId !== undefined) {
      dispatch(deletePost(postId));
    }
  };

  const handleUpdatePost = (post: Post) => {
    if (post.id !== undefined) {
      const updatedData: Partial<Post> = {
        title: newPostData.title || post.title,
        content: newPostData.content || post.content,
        category: newPostData.category || post.category,
        images: newPostData.images || post.images,
      };
      dispatch(updatePost({ id: post.id, ...updatedData }));
      setShowUpdatePostForm(false);
      setCurrentPost(null);
      setNewPostData({
        title: '',
        content: '',
        category: '',
        images: [],
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      <div className="flex-1 flex flex-col">

        <div className="flex-1 p-6">
          <div className="flex justify-end mb-4">
            <button
              className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
              onClick={() => setShowAddPostForm(true)}
            >
              Add Post
            </button>
          </div>

          {showAddPostForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-light-green rounded-lg shadow-md p-6 w-full max-w-2xl relative">
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowAddPostForm(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold mb-4">Add Post</h2>
                <form onSubmit={handleSubmitAddPost} className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newPostData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <textarea
                    name="content"
                    placeholder="Content"
                    value={newPostData.content}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {categoryList && Array.isArray(categoryList) && (
                    <select
                      name="category"
                      value={newPostData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select Category</option>
                      {categoryList.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
                    >
                      Add Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.id} className="p-4 bg-light-green rounded-md shadow-md">
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p>{post.content}</p>
                  <p>
                    Category:{' '}
                    {post.category ? post.category.name : 'Unknown'}
                  </p>
                  <div className="mt-2 flex flex-wrap">
                    {post.images?.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Post ${post.id} Image ${index}`}
                        className="w-24 h-24 mr-2 mb-2 object-cover rounded-md"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => {
                        setShowUpdatePostForm(true);
                        setCurrentPost(post);
                        setNewPostData({
                          title: post.title,
                          content: post.content,
                          category: post.category,
                          images: post.images || [],
                        });
                      }}
                      className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>

          {showUpdatePostForm && currentPost && (
            <div className="p-6 bg-light-green rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Update Post</h2>
              <form onSubmit={() => handleUpdatePost(currentPost)} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newPostData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                  name="content"
                  placeholder="Content"
                  value={newPostData.content}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {categoryList && Array.isArray(categoryList) && (
                  <select
                    name="category"
                    value={newPostData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select Category</option>
                    {categoryList.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                )}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowUpdatePostForm(false);
                      setCurrentPost(null);
                      setNewPostData({
                        title: '',
                        content: '',
                        category: '',
                        images: [],
                      });
                    }}
                    className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
                  >
                    Update Post
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;