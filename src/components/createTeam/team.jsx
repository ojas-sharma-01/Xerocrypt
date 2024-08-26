import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import { DateTime} from "luxon";
import { useState, useEffect, useContext } from "react";
import Header from "../header/header";
import { authContext } from "../../contexts/authcontext";

const guidelines = [{
                    guideline: "Lorem ipsum dolor sit, amet consectetur \
                    adipisicing elit. Eum reiciendis veniam, eligendi blanditiis \
                    porro similique voluptas a inventore ab repudiandae laudantium \
                    eius enim, quia nam quas assumenda consectetur cupiditate pariatur?"
                },
                {
                    guideline: "Lorem ipsum dolor sit, amet consectetur \
                    adipisicing elit. Eum reiciendis veniam, eligendi blanditiis \
                    porro similique voluptas a inventore ab repudiandae laudantium \
                    eius enim, quia nam quas assumenda consectetur cupiditate pariatur?"
                },
                {
                    guideline: "Lorem ipsum dolor sit, amet consectetur \
                    adipisicing elit. Eum reiciendis veniam, eligendi blanditiis \
                    porro similique voluptas a inventore ab repudiandae laudantium \
                    eius enim, quia nam quas assumenda consectetur cupiditate pariatur?"
                },];

const Team = () => {
    const [Timer, settimer] = useState({});
    const [modal, setmodal] = useState(false);
    const {user, login, logout} = useContext(authContext);


    useEffect(() => {
        const targetDate = DateTime.local(2024, 9, 7, 0, 0).setZone('Asia/Kolkata');
        
        const updateTimer = () => {
            const now = DateTime.now().setZone('Asia/Kolkata');
            const diff = targetDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);
            
            settimer({
                days: diff.days,
                hours: diff.hours,
                minutes: diff.minutes,
                seconds: Math.floor(diff.seconds)
            });
        };

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log(user);
    }, []);

    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono w-screen"
         >
        <div className="bg-black h-screen flex flex-col w-screen text-white">
            <Header />
            <motion.div
                  initial={{ width: '60px' }}
                  whileHover={{ width: '120px' }} 
                  className="overflow-hidden text-white fixed top-[30%] left-[-1rem]"
                  onClick={() => {setmodal(!modal)}} 
               >
                  <Button text="i" width="w-[80%] md:w-[100%]" height="h-[100%]" text_size="text-[20px] md:text-[40px]" border_width="p-[1px]" />
            </motion.div>
            {modal && <div className="fixed inset-0 z-[1] flex justify-center items-center">
                    <div className="absolute top-[10%] left-[10%] h-[80%] w-[80%] bg-slate-900 bg-opacity-95 flex flex-col items-center">
                        <div className="absolute w-fit top-0 right-0 m-2 text-[40px] mr-4
                         hover:bg-slate-500"> 
                            <button className="px-4 font-cus2" onClick={() => {setmodal(!modal)}}> X </button>
                        </div>
                        <div className="m-10 mt-4 text-[30px] md:text-[50px] font-cus2 border-b-2 border-white w-fit
                        md:w-[80%]"> Guidelines </div>
                        <div className="m-auto w-[90%] h-[70%] flex flex-col justify-evenly overflow-auto">
                        {guidelines.map((ele, index) => {
                            return (
                                <div key={index} className="flex justify-evenly w-full">
                                    <div className="flex-[0.05] md:flex-[0.15]">{index+1}</div>
                                    <div className="flex-[0.95] md:flex-[0.85]">{ele.guideline}</div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
            </div>}
            <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto bg-black w-full h-full">
                <div className="text-[40px] md:text-[100px] lg:text-[150px] font-cus2 text-green-400">XERO.CRYPT 2.0</div>
                <div className="text-[30px] md:text-[70px] font-cus2 text-green-400">
                    {Timer.days}:{Timer.hours}:{Timer.minutes}:{Timer.seconds}
                </div>
                <div className="text-[30px] md:text-[50px] text-white w-full font-cus2">Create/Join Your Team.</div>
                <div className="mt-4 flex justify-evenly w-[100%] font-cus2">
                    <Link to="/create_team">
                        <Button className="mx-10" text_size="text-[25px] md:text-[40px]" text="CREATE" width="w-[110px] md:w-[170px]" 
                        height="100px" border_width="p-[1px]"/>
                    </Link>
                    <Link to="/join_team">
                        <Button className="mx-10" text_size="text-[25px] md:text-[40px]" text="JOIN" width="w-[110px] md:w-[170px]" 
                        height="100" border_width="p-[1px]"/>
                    </Link>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Team;