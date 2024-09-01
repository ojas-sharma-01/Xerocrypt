import { motion } from "framer-motion";

const Button = (props) => {
    return (
            <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className={`${props.width} ${props.height} bg-white ${props.border_width} ${props.text_size}
            hover:cursor-pointer font-cus2`} 
            style={{clipPath : "polygon(0.7rem 0, 100% 0, 100% calc(100% - 0.7rem), calc(100% - 0.7rem) 100%, 0 100%, 0 0.7rem)"}}>
                <div className="bg-black p-0 flex w-[100%] h-[100%] justify-center items-center hover:bg-slate-800" 
                style={{clipPath : "polygon(0.7rem 0, 100% 0, 100% calc(100% - 0.7rem), calc(100% - 0.7rem) 100%, 0 100%, 0 0.7rem)"}}>
                    {props.text}
                </div>
        </motion.button>
    )
}  


export default Button;