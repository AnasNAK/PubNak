import React, { useState } from 'react';
// import DeleteModal from './DeleteModal'; 
import styles from  './Table.module.css'; 
import bg from '@/styles/index.module.css';

const Table: React.FC =  (data) => {
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
        <div className={`${bg.bodyOverlay} mx-auto pl-0 sm:pl-44`}>
            <div className="flex justify-center items-center h-screen">
                <table className={`${styles.table} medicine w-[800px] border-collapse overflow-hidden shadow-lg`}>
                    <thead className={`${styles.thead}`}>
                        <tr>
                            <th className={`${styles.th} ${styles.tha} heading bg-black p-4 text-left text-white`}>Medicine</th>
                            <th className={`${styles.th} ${styles.tha} heading bg-black p-4 text-left text-white`}>Category</th>
                            <th className={`${styles.th} ${styles.tha} heading bg-black p-4 text-left text-white`}>Price</th>
                            <th className={`${styles.th} ${styles.tha} heading bg-black p-4 text-left text-white`}>Delete</th>
                            <th className={`${styles.th} ${styles.tha} heading bg-black p-4 text-left text-white`}>Update</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles.tbody} med`}>
                        <tr className={`${styles.trc} hover:bg-green-200 transition-colors duration-300`}>
                            <td className={`${styles.tda} p-4 relative text-black font-bold`}>Sample Medicine</td>
                            <td className={`${styles.tda} p-4 relative text-black font-bold`}>Sample Category</td>
                            <td className={`${styles.tda} p-4 relative text-black font-bold`}>$10</td>
                            <td className={`${styles.tda} p-4 relative text-black font-bold`}>
                                <button className={`${styles.tda} action-button delete-button`}>Delete</button>
                            </td>
                            <td className={`${styles.tda} p-4 relative text-black font-bold`}>
                                <button className="action-button delete-button">edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
