import React, { useState } from 'react';
// import DeleteModal from './DeleteModal'; 
import './Table.module.css'; 

function Table(data) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // const handleDeleteClick = () => {
    //     setShowDeleteModal(true);
    // };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
    };

    // const handleConfirmDelete = () => {
       
    //     console.log('Item deleted!');
    //     handleCloseModal(); 
    // };

    return (
        <div className='bg-gradient-to-r from-[#49a09d] to-[#5f2c82] mx-auto pl-0 sm:pl-44'>
            <div className="flex justify-center items-center h-screen">
                <table className="medicine w-[800px] border-collapse overflow-hidden shadow-lg">
                    <thead>
                        <tr>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">Medicine</th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">Category</th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">Price</th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">Delete</th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">Update</th>
                        </tr>
                    </thead>
                    <tbody className='med'>
                       
                        <tr className="hover:bg-white/30 transition-colors duration-300">
                            <td className="p-4 relative text-white">Sample Medicine</td>
                            <td className="p-4 relative text-white">Sample Category</td>
                            <td className="p-4 relative text-white">$10</td>
                            <td className="p-4 relative text-white">
                                <button className="action-button delete-button">
                                    Delete
                                </button>
                           
                            </td>
                            <td className="p-4 relative text-white">
                                     <button className="action-button delete-button">
                                    edit
                                </button></td>
                        </tr>
                        <tr className="hover:bg-white/30 transition-colors duration-300">
                            <td className="p-4 relative text-white">Sample Medicine</td>
                            <td className="p-4 relative text-white">Sample Category</td>
                            <td className="p-4 relative text-white">$10</td>
                            <td className="p-4 relative text-white">
                                <button  className="action-button delete-button">
                                    Delete
                                </button>
                               </td>
                               <td className="p-4 relative text-white">
                                     <button  className="action-button delete-button">
                                    edit
                                </button></td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
