import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import xero_logo from './xero_logo.png';
import devcomm from './devcomm.png';
import { authContext } from "../../contexts/authcontext";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { teamContext } from "../../contexts/teamcontexts";

const Header = () => {
    const { user, logout } = useContext(authContext);
    const { team } = useContext(teamContext);
    const [ham, setHam] = useState(false);

    const menuVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { width: '70%', opacity: 1 },
        exit: { width: 0, opacity: 0 }
    };

    return (
        <>
            <div className="md:hidden flex w-full text-white">
                <div className="flex-1 flex justify-start text-[20px] items-center">
                    <Link to="/" className="flex items-center mt-2 ml-2">
                        <img className="w-[40px]" src={xero_logo} alt="xero_logo" />
                        <span className="text-[16px] font-cus2">X</span> 
                        <img className="h-[40px] ml-2" src={devcomm} alt="devcomm_logo" />
                    </Link>
                </div>
                <div className="flex justify-center items-center mx-4">
                    <span onClick={() => setHam(!ham)} className={`text-[35px] cursor-pointer font-cus2 ${ham ? 'hidden' : ''}`}>=</span>
                </div>
                <AnimatePresence>
                {ham && 
                    <motion.div
                        className="fixed top-0 right-0 z-10 bg-white text-white pl-[1.5px] pb-[1.5px]"
                        style={{clipPath : "polygon(0 0, 100% 0, 100% 100%, 0.7rem 100%, 0 calc(100% - 0.7rem))"}}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration:0.3 }}
                    >
                        <div className="bg-slate-950 w-full h-full items-center p-4"
                        style={{clipPath : "polygon(0 0, 100% 0, 100% 100%, 0.7rem 100%, 0 calc(100% - 0.7rem))"}}>
                        <div className="flex justify-end text-[35px] w-full mb-4 cursor-pointer font-cus2" onClick={() => setHam(!ham)}>
                            X
                        </div>
                        <div className="m-6">
                            <Link to="/your_team">
                                <Button text_size="text-[20px]" text="Team" border_width="p-[1px]" width="w-[120px]" height="h-[40px]" />
                            </Link>
                        </div>
                        <div className="m-6">
                            {user === null ? (
                                <Link to="/login">
                                    <Button text="Login/Register" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]" height="h-[40px]"/>
                                </Link>
                            ) : (
                                <div onClick={() => { logout(); }}>
                                    <Button text="Logout" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]" height="h-[40px]"/>
                                </div>
                            )}
                        </div>
                        <div className="m-6">
                            <Link to="/leaderboard/1">
                                <Button text="Leaderboard" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]" height="h-[40px]" />
                            </Link>
                        </div>
                        <div className="m-6">
                            <Link to="/ques/1">
                                <Button text="Arena" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]" height="h-[40px]"/>
                            </Link>
                        </div>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>

            <div className="hidden text-white text-right p-4 md:flex w-screen justify-end font-cus2 overflow-x-hidden">
                <div className="flex-1 flex justify-start text-[20px] items-center">
                    <Link to="/" className="flex items-center">
                        <img className="ml-10 w-[70px]" src={xero_logo} alt="xero_logo" />
                        <span>X</span>
                        <img className="h-[60px] ml-2" src={devcomm} alt="devcomm_logo" />
                    </Link>
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/your_team">
                        <Button text_size="text-[20px]" text="Team" border_width="p-[1px]" width="w-[120px]" />
                    </Link>
                </div>
                <div className="mx-8 flex items-center">
                    {user === null ? (
                        <Link to="/login">
                            <Button text="Login/Register" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]" />
                        </Link>
                    ) : (
                        <div onClick={() => { logout(); }}>
                            <Button text="Logout" text_size="text-[20px]" border_width="p-[1px]" width="w-[120px]" />
                        </div>
                    )}
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/leaderboard/1">
                        <Button text="Leaderboard" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]" />
                    </Link>
                </div>
                {team && (
                    <div className="mx-8 flex items-center">
                        <Link to="/ques/1">
                            <Button text="Arena" text_size="text-[20px]" border_width="p-[1px]" width="w-[120px]" />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
