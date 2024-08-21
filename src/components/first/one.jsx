import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import one from "./one.png";

const First = () => {
    const [answer, setAnswer] = useState('');
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono"
        >
            <p className="text-white mt-0">Hahahahaha you have a <span>bright</span> future but can’t be determined in terms of total numbers.</p>
            <img src={one} className="w-[60%] mt-10 pb-10" alt="One" />

            <div className="absolute bottom-10 right-10 flex items-center justify-end">
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className={`rounded ${bgColor} border border-[0.1px] border-slate-600 text-black`}
                />
                <button
                    onClick={handleNextClick}
                    className={`ml-4 px-4 ${bgColor} text-white rounded hover:bg-stone-800`}
                >
                    go
                </button>
            </div>
        </motion.div>
    );
};

export default First;
