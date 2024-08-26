import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import xero_logo from './xero_logo.png';
import devcomm from './devcomm.png';
import { authContext } from "../../contexts/authcontext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { teamContext } from "../../contexts/teamcontexts";

const Header = () => {
    const {user, login, logout} = useContext(authContext);
    const {team} = useContext(teamContext);
    const [ham, setham] = useState(false);
    return (
        <>
        <div className="md:hidden flex w-[100%] text-white">
            <div className="flex-1 flex justify-start text-[20px] items-center">
                        <Link to="/" className="flex items-center mt-2 ml-2">
                            <img className="w-[40px]"src={xero_logo} alt="xero_logo"/>
                            <span className="text-[16px]">X</span> 
                            <img className="h-[40px] ml-2"src={devcomm} alt="devcomm_logo"/>
                        </Link>
            </div>
            <div className="flex justify-center items-center mx-4">
                <span onClick={() => setham(!ham)} className={`text-[35px] ${ham ? 'hidden' : ''}`}>=</span>
            </div>
            {ham && 
            // <motion.div
            // initial={{ x: '-100%', width: '0%' }} // Start off-screen
            // animate={{ x: '0', width: '70%' }}    // Slide in to 70% width
            // transition={{ duration: 0.5, ease: 'easeOut' }}
            // >
            <div className="flex flex-col fixed z-10 h-[100%] items-center right-0 bg-gray-500 p-4 text-white">
                <div className="flex justify-end text-[35px] w-[100%] mb-4" onClick={() => setham(!ham)}><div> X </div></div>
                <div className="m-4"><Link to="/your_team" > <Button text_size="text-[20px]" text="Team" border_width="p-[1px]" width="w-[120px]"/>
                </Link></div>
                <div className="m-4">{user === null ? 
                    (<Link to="/login">
                        <Button text="Login/Register" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]"/>
                    </Link>) : 
                    (   
                        <div onClick={() => {logout(); console.log("ddd")}}>
                        <Button text="Logout" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]"/>
                        </div>
                    )}</div>
                <div className="m-4"><Link to="/leaderboard/1" >
                        <Button text="Leaderboard" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]"/>
                    </Link></div>
                    <div className="m-4"><Link to="/ques/1" >
                        <Button text="Arena" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]"/>
                    </Link></div>
            </div>
            // </motion.div>
            }
        </div>
        <div className="hidden text-white text-right p-4 md:flex w-screen justify-end font-cus2 overflow-x-hidden">
                <div className="flex-1 flex justify-start text-[20px] items-center">
                    <Link to="/" className="flex items-center">
                        <img className="ml-10 w-[70px]"src={xero_logo} alt="xero_logo"/>
                        <span>X</span> 
                        <img className="h-[60px] ml-2"src={devcomm} alt="devcomm_logo"/>
                    </Link>
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/your_team" > <Button text_size="text-[20px]" text="Team" border_width="p-[1px]" width="w-[120px]"/>
                    </Link></div>
                <div className="mx-8 flex items-center">
                    {user === null ? 
                    (<Link to="/login">
                        <Button text="Login/Register" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]"/>
                    </Link>) : 
                    (   
                        <div onClick={() => {logout(); console.log("ddd")}}>
                        <Button text="Logout" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]"/>
                        </div>
                    )}
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/leaderboard/1" >
                        <Button text="Leaderboard" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]"/>
                    </Link>
                </div>
                {team && <div className="mx-8 flex items-center">
                    <Link to="/ques/1" >
                        <Button text="Arena" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]"/>
                    </Link>
                </div>}
        </div>
        </>
    );
}

export default Header;