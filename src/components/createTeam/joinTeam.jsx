import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import Header from "../header/header";

const Jointeam = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono"
         >
            <div className="bg-black h-screen flex flex-col w-screen">
                <Header />
                <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto h-full">
                    <div className="text-[70px] font-cus2 text-green-400">XEROCRYPT</div>
                    <div className="text-[50px] text-white w-full font-cus2">Create/Join Your Team.</div>
                    <div className="flex justify-center w-[40%]">
                    <Button className="mx-10" text_size="20px" text="Join/Change" width="w-[100px]" height="100px" border_width="1px"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Jointeam;