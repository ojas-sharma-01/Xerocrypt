import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";
import xero_logo from './xero_logo.png';
import devcomm from './devcomm_logo.png';

const Header = () => {
    return (
        <div className="text-white text-right p-4 flex justify-end w-full font-cus2 bg-gray-950">
                <div className="flex-1 flex justify-start text-[20px] items-center">
                    <Link to="/" className="flex items-center">
                        <img className="ml-10 w-[70px] mr-2"src={xero_logo} />
                        X 
                        <img className="w-[40px] h-auto ml-4"src={devcomm}/>
                    </Link>
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/your_team" > <Button text_size="text-[20px]" text="Team" border_width="p-[1px]" width="w-[120px]"/>
                    </Link></div>
                <div className="mx-8 flex items-center">
                    <Link to="/login">
                        <Button text="Login/Register" text_size="text-[20px]" border_width="p-[1px]" width="w-[160px]"/>
                    </Link>
                </div>
                <div className="mx-8 flex items-center">
                    <Link to="/leaderboard" >
                        <Button text="Leaderboard" text_size="text-[20px]" border_width="p-[1px]" width="w-[140px]"/>
                    </Link>
                </div>
        </div>
    );
}

export default Header;