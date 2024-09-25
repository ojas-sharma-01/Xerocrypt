// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className='w-72 md:w-96 bg-green-400 p-[2px]' 
            style={{clipPath : "polygon(0.7rem 0, 100% 0, 100% calc(100% - 0.7rem), calc(100% - 0.7rem) 100%, 0 100%, 0 0.7rem)"}}>
                <div className="bg-black text-green-400 p-6 w-[100%] h-[100%] shadow-lg items-center justify-center flex flex-col"
                style={{clipPath : "polygon(0.7rem 0, 100% 0, 100% calc(100% - 0.7rem), calc(100% - 0.7rem) 100%, 0 100%, 0 0.7rem)"}}>
                    <p className="text-center text-white mb-4 text-[25px] font-cus2">Are you sure you want to log out?</p>
                    <div className="flex justify-evenly w-[60%] md:w-[50%]">
                        <button
                            onClick={onConfirm}
                            className="bg-green-500 text-black px-4 py-2 mr-2 rounded hover:bg-green-600 transition font-cus2 text-[20px]"
                        >
                            Yes
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition font-cus2 text-[20px]"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
