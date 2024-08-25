import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Second = () => {
    const [answer, setAnswer] = useState('');
    const [obfuscatedKey, setObfuscatedKey] = useState(''); 
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('bg-black');

    const handleNextClick = () => {
        if (answer === '1445') {
            navigate('/third'); 
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
                Sometimes small things are the things that need to be noticed 
            </p>

            <p className='text-transparent'>
                key to Akhet is :- <span className="text-black">the path you already visited</span>
            </p>

            <p className='hidden'>
                https://en.wikipedia.org/wiki/Akhet_(hieroglyph)
            </p>

            <p className='md:hidden sm:block text-white'>
                The answer lies in the void 
            </p>

            <div className="absolute bottom-10 right-10 flex items-center justify-end">
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder='let the sun rise'
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

export default Second;
