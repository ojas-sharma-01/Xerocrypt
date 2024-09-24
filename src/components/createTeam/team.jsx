import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import { DateTime} from "luxon";
import { useState, useEffect, useContext } from "react";
import Header from "../header/header";
import { authContext } from "../../contexts/authcontext";
import { clockContext } from "../../contexts/clockContext";
import yhill from './YHills-logo-main.webp'
import discord from './discord.png'
import '../../index.css';
const guidelines = [{
                    guideline: "The hunt will last for 24 hours, 28 Sept 12PM - 29 Sept 12PM."
                },
                {
                    guideline: "All answers should be in lower case and can contain special letters/symbols \
                     but are one word only. Eg : if the answer is ''ye is the goat' \
                     then the correct submission would be 'yeisthegoat'."
                },
                {
                    guideline: "A minor typo will result in an incorrect answer, so be doubly \
                    sure of what you enter. For example, if the answer is 'nsut' and you enter 'nsit',\
                    it will be considered INCORRECT."
                },
                {
                    guideline: `<p>Hints will be posted \n on this discord server \n 
                    <a target="__blank" class="hov" href="https://discord.gg/UuJdGK9GkE">LINK</a> .</p>`
                }, 
                {
                    guideline: "Laptop may be necessary to solve some of the questions, so be prepared." 
                },
                {
                    guideline: "Spamming the admins for hints is frowned upon." 
                },
                {
                    guideline: "The use of any unfair means will be dealt with strictly and your team shall be permanently disqualified from participating." 
                },
                {
                    guideline: "There is no restriction on the number of times you can enter an answer,\
                     so feel free to guess, although random answers are highly unlikely to work." 
                },
                {
                    guideline: "If you feel you're stuck at any point it's best to clear your head and start thinking from scratch." 
                },
                {
                    guideline: "Leads will be open from time to time for 20 mins and admins for that window will be assigned each time, you can ask them if you are going in the correct direction or not and they shall reply you with a yes or no." 
                },
                {
                    guideline: "Asking other participants for solutions or any help will be considered cheating and lead to disqualification if reported. "
                },
                {
                    guideline: "Using the internet is allowed, as this hunt cannot be solved without it."
                }];

const Team = () => {
    const [modal, setmodal] = useState(false);
    const {user, login, logout} = useContext(authContext);
    const {clock} = useContext(clockContext);


    return (
        // <motion.div
        //     // initial={{ opacity: 0 }}
        //     // animate={{ opacity: 1 }}
        //     // transition={{ duration: 1 }}
        //     className="relative flex flex-col items-center justify-center bg-black h-screen font-mono w-screen"
        //  >
        <div className="bg-black min-h-screen h-screen md:h-auto justify-center items-center relative flex flex-col w-[100%] text-white overflow-x-hidden">
            <Header />
            <div className="absolute top-[8%] md:top-[10%] text-white text-[30px] right-[0.3rem] md:right-[2rem]">
                <a href="https://discord.gg/UuJdGK9GkE" target="__blank"> <img className="h-[30px] md:h-[50px]" src={discord}/> </a>
            </div>
            <motion.div
                  initial={{ width: '60px' }}
                  whileHover={{ width: '120px' }} 
                  className="overflow-hidden text-white fixed top-[20%] md:top-[30%] left-[-1.25rem] md:left-[-1rem] my-[10px]"
                  onClick={() => {setmodal(!modal)}} 
               >
                    <Button text="i" width="w-[80%] md:w-[100%]" height="h-[100%]" text_size="text-[20px] md:text-[40px]" border_width="p-[1px]" />
            </motion.div>
            {/* <motion.div
                  initial={{ width: '60px' }}
                  whileHover={{ width: '120px' }} 
                  className="overflow-hidden text-white fixed top-[35%] md:top-[40%] left-[-1.25rem] md:left-[-1rem] my-[10px]"
               >
                    <Button text="discord" width="w-[80%] md:w-[100%]" height="h-[100%]" text_size="text-[20px] md:text-[40px]" border_width="p-[1px]" />
            </motion.div> */}
            {/* <motion.div
                  initial={{ width: '60px' }}
                  whileHover={{ width: '120px' }} 
                  className="overflow-hidden text-white fixed top-[40%] md:top-[50%] left-[-1.25rem] md:left-[-1rem] my-[10px]"
               >
                    <Button text="team" width="w-[80%] md:w-[100%]" height="h-[100%]" text_size="text-[20px] md:text-[40px]" border_width="p-[1px]" />
            </motion.div> */}
            {modal && <div className="fixed inset-0 z-[1] flex justify-center items-center">
                    <div className="absolute top-[10%] left-[10%] h-[80%] w-[80%] bg-slate-900 bg-opacity-95 flex flex-col items-center">
                        <div className="absolute w-fit top-0 right-0 m-2 text-[40px] mr-4
                         hover:bg-slate-500"> 
                            <button className="px-4 font-cus2" onClick={() => {setmodal(!modal)}}> X </button>
                        </div>
                        <div className="m-10 mt-4 text-[30px] md:text-[50px] font-cus2 border-b-2 border-white w-fit
                        md:w-[80%]"> Guidelines </div>
                        <div className="scroll_hide m-auto w-[90%] h-[150%] flex flex-col justify-evenly overflow-auto font-cus2">
                        {guidelines.map((ele, index) => {
                            return (
                                <div key={index} className="flex justify-evenly w-full my-8 text-[30px]">
                                    <div className="flex-[0.1] md:flex-[0.1] text-[60px] pb-10">*</div>
                                    <div className="flex-[0.9] md:flex-[0.9] text-left pl-4" dangerouslySetInnerHTML={{__html:ele.guideline}}></div>
                                </div>
                            )
                        })}
                        <p className="text-green-400 text-[30px] md:text-[50px] mb-8 mt-[-20px]">GAME ON !!!</p>
                        </div>
                    </div>
            </div>}
            <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto bg-black h-[90%] md:h-[800px] overflow-x-hidden">
                <div className="text-[20px] md:text-[30px] font-cus2">
                    Official Education Partner
                    <p className="flex items-center justify-center"><a href="https://yhills.com/" target="__blank"><img className="h-[50px]" src={yhill}/></a></p>
                </div>
                <div className="text-[40px] md:text-[100px] lg:text-[150px] font-cus2 text-green-400">XERO.CRYPT 2.0</div>
                <div className="text-[50px] md:text-[70px] font-cus2 text-green-400">
                    { clock === null ? 0 : clock.days }:{ clock === null ? 0 : clock.hours }:
                    { clock === null ? 0 : clock.minutes}:{ clock === null ? 0 : clock.seconds }
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
                <div className="md:hidden">
                    <Link to="/register">
                    <Button text="Register" text_size="text-[25px] md:text-[40px]" width="w-[110px] md:w-[170px]" 
                    height="100" border_width="p-[1px]"/></Link>
                </div>
            </div>
        </div>
        // </motion.div>
    )
}

export default Team;