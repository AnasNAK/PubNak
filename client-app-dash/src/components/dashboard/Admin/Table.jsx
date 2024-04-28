import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {fetchCategory} from '../../../features/categorySlice';

function Table(data) {
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewCategory('');
    };

    const handleCategoryChange = (e) => {
        setNewCategory(e.target.value);
    };

    const handleAddCategory = () => {
        // dispatch(addCategory(newCategory));
        // handleCloseModal();
        dispatch(fetchCategory());
    };

    return (
        <div className="bg-gradient-to-r from-[#D6EFE8] to-[#B9E0D3] min-h-screen flex items-center justify-center relative">
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#1E7D61] text-white">
                       
                            <th className="px-6 py-3">Category</th>
           
                            <th className="px-6 py-3">Delete</th>
                            <th className="px-6 py-3">Update</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-[#D6EFE8] transition-colors duration-300">

                            <td className="px-6 py-4">Sample Category</td>

                            <td className="px-6 py-4">
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                                    Delete
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-[#1E7D61] hover:bg-[#166B51] text-white px-4 py-2 rounded">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button
                className="fixed top-4 right-4 bg-[#1E7D61] hover:bg-[#166B51] text-white px-4 py-2 rounded flex items-center"
                onClick={handleOpenModal}
            >
                <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                Add Category
            </button>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-lg font-bold mb-4">Add Category</h2>
                        <input
                            type="text"
                            value={newCategory}
                            onChange={handleCategoryChange}
                            className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                            placeholder="Enter category name"
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                onClick={handleAddCategory}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;