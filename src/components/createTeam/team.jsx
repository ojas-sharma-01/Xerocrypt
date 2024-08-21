import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import { DateTime} from "luxon";
import { useState, useEffect } from "react";
import Header from "../header/header";

const date = DateTime.now().setZone('Asia/Kolkata');
const time_now = parseInt("" + date.day + date.hour + date.minute + date.second);
const Team = () => {
    const [Timer, setimer] = useState(time_now);

    useEffect(() => {
        const interval = setInterval(() => {
            setimer(Timer-1);
        }, 1000);

        return (() => clearInterval(interval));
    }, [Timer]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono w-screen"
         >
        <div className="bg-black h-screen flex flex-col w-screen">
            <Header />
            <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto h-full">
                <div className="text-[150px] font-cus2 text-green-400">XERO.CRYPT</div>
                <div className="text-[70px] font-cus2 text-green-400">
                    { Timer }
                </div>
                <div className="text-[50px] text-white w-full font-cus2">Create/Join Your Team.</div>
                <div className="mt-4 flex justify-evenly w-[100%] font-cus2">
                    <Link to="/create_team">
                        <Button className="mx-10" text_size="text-[40px]" text="CREATE" width="w-[170px]" height="100px" border_width="p-[1px]"/>
                    </Link>
                    <Link to="/join_team">
                        <Button className="mx-10" text_size="text-[40px]" text="JOIN" width="w-[150px]" height="100%" border_width="p-[1px]"/>
                    </Link>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Team;