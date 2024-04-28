import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, addCategory, updateCategory, deleteCategory } from '../../../features/categorySlice';

function Table() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const dispatch = useDispatch();
  const { categoryList, loading, error, successMessage } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleOpenAddModal = () => {
    setShowAddModal(true);
    setNewCategory('');
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleOpenUpdateModal = (category) => {
    setShowUpdateModal(true);
    setEditingCategory(category);
    setNewCategory(category.name);
  };


  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setEditingCategory(null);
    setNewCategory('');
  };

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    dispatch(addCategory({ name: newCategory }));
    handleCloseAddModal();
  };

  const handleUpdateCategory = () => {
    dispatch(updateCategory({ id: editingCategory.id, name: newCategory }));
    handleCloseUpdateModal();
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
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
            {loading ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  {error}
                </td>
              </tr>
            ) : categoryList?.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  No categories found.
                </td>
              </tr>
            ) : (
              categoryList.map((category) => (
                <tr key={category.id} className="hover:bg-[#D6EFE8] transition-colors duration-300">
                  <td className="px-6 py-4">{category.name}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-[#1E7D61] hover:bg-[#166B51] text-white px-4 py-2 rounded"
                      onClick={() => handleOpenUpdateModal(category)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <button
        className="fixed top-20 right-10 bg-[#1E7D61] hover:bg-[#166B51] text-white px-4 py-2 rounded flex items-center"
        onClick={handleOpenAddModal}
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
      {showAddModal && (
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
                onClick={handleCloseAddModal}
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
      {showUpdateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-bold mb-4">Update Category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={handleCategoryChange}
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
              placeholder="Enter new category name"
            />
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={handleCloseUpdateModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleUpdateCategory}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default Table;