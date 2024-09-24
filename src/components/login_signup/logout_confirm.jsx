// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-black text-green-400 border border-green-500 rounded-lg p-6 w-80 shadow-lg">
                <p className="text-center mb-4">Are you sure you want to log out?</p>
                <div className="flex justify-center">
                    <button
                        onClick={onConfirm}
                        className="bg-green-500 text-black px-4 py-2 mr-2 rounded hover:bg-green-600 transition"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
