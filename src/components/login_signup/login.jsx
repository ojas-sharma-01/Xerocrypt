import Button from "../button_cus/button_cus";
import Header from "../header/header";
import { Link } from "react-router-dom";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    // const [auth, setauth] = 
    return (
        <div className="h-screen bg-black justify-center items-center w-screen flex flex-col text-white">
            <Header />
            <div className="h-full flex flex-col items-center">
                <div className="my-20 font-cus2 text-[50px]">Login</div>
                <div className="flex flex-col justify-evenly items-center h-[30%] text-[20px]">
                    <div>
                        <input type="text" className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Email"/>
                    </div>
                    <div>
                        <input type="text" className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Password"/>
                    </div>
                </div>
                <div className="m-8 text-[20px]">
                    <Button text="Login" border_width = "1px" height="h-[50px]" width="w-[100px]"/>
                </div>
                <div className="text-[20px] font-cus2">Click 
                    <Link to="/register" className="hover:bg-gray-900 text-green-300"> here</Link> to create an account.
                </div>
            </div>
        </div>
    );
}

export default Login;