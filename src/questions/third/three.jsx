import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Third = () => {
    const [answer, setAnswer] = useState('');
    const [obfuscatedKey, setObfuscatedKey] = useState(''); 
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('bg-black');

    const handleNextClick = () => {
        if (answer === '1445') {
            navigate('/second'); 
        } else {
            alert('OOPs Secrets scattered, prowess required.');
        }
    };

    return (
        <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono"
         >

            <p className='md:block sm:hidden text-white'>
                Information should be free to everyone 
            </p>
            <p className='text-white md:px-32 mt-10'>
            The light of truth must shine unbound, for in the darkened corners where secrets dwell, only chains are forged. Break the seals of hidden knowledge, and let wisdom flow freely, as it was meant to be. Those who seek to hoard the light shall find only shadows in their grasp. The key lies in the open, yet only the worthy shall see.
            </p>
            <p className='md:block sm:hidden text-white italic mt-2'>
                Liber Primus in its orignal condition is the way.
            </p>
            <p className='italics text-white mt-4'>
                Whisper not, or face the wrath of shadows.
            </p>

            <div className="absolute bottom-10 right-10 flex items-center justify-end">
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className={`rounded ${bgColor} border border-[0.1px] pl-5 border-slate-600 text-black`}
                />
                <button
                    onClick={handleNextClick}
                    className={`ml-4 px-4 ${bgColor} text-white rounded hover:bg-stone-800`}
                >
                    go
                </button>
            </div>
         </motion.div>
        </>
    );
};

export default Third;
