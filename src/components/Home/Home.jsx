import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import devcomm from "./devcomm.jpg";

const Home = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState('bg-black');

  const handleNextClick = () => {
    if (answer === 'devcomm') {
      navigate('/first'); 
    } else {
      alert('OOPs Secrets scattered, prowess required.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col items-center justify-center h-screen ${bgColor} font-mono`}
    >
      <div className="text-left">
        <h2 className="text-3xl font-bold text-white">Hello</h2>
        <p className="mt-4 text-lg text-white">The way ahead is clear, with no one in sight. The cult seeks the devoted.</p>

        <p className="mt-4 text-lg text-white">"The keys are hidden in the shadows of many realms, where only the wise may unlock the path with their varied gifts."</p>
        <p className="mt-4 text-lg text-white">The words are the reverse maps in this <span className='text-xs'>small</span> world, their meaning is the returning road, and <span className='font-black italic'>I</span><span className='hidden'>https://www.reddit.com/user/No-Kaleidoscope3193/comments/1evh0zm/the_last_whisper_mirrors_the_first_and_the/</span> am the path to them</p>
        
        <img src={devcomm} className='md:w-[30%] mt-20' alt="Devcomm" />
        <p className="mt-4 text-lg text-white md:mt-20">Good Luck .</p>
        <p className="mt-4 text-lg text-white md:mt-20">Beware of the False Preachings</p>

        <div className="mt-10 flex items-end justify-end">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`p-0 rounded ${bgColor} border border-[0.1px] border-slate-600 text-black`}
          />
          <button
            onClick={handleNextClick}
            className={`ml-4 px-2 ${bgColor} text-white rounded hover:bg-stone-800`}
          >
            go
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
