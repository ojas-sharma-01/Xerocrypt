import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import Header from "../header/header";

const Createteam = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono w-screen"
         >
            <div className="bg-black h-screen w-screen flex flex-col">
            <Header />
            <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto w-fit h-full">
                <div className="text-[70px] font-cus2 text-green-400"> Create your Team. </div>
                <div>
                    <div className="text-[30px] font-cus2 text-zinc-400 mb-2"> Your Team Id : team_id </div>
                    <div className="text-[20px] text-white w-full font-cus2 mt-2">
                        <label className="text-zinc-400"> Team Name: </label>
                        <input className="bg-transparent mx-8 border-2 border-gray-700 text-center"/>
                    </div>
                </div>
                <div className="text-[18px]">
                    Your Teammates are required to enter the same team_id as yours.
                </div>
                <div className="flex justify-evenly w-[40%] font-cus2">
                    <Button className="mx-10" text_size="text-[20px]" text="Create Team" width="w-[150px]" border_width="p-[1px]"/>
                </div>
            </div>
            </div>
        </motion.div>
    );
}

export default Createteam;