import { Link } from "react-router-dom";
import Button from "../button_cus/button_cus";

const Header = () => {
    return (
        <div className="text-white text-right p-10 flex justify-end w-full font-cus2 bg-gray-950">
                <div className="flex-1 flex justify-start text-[20px]">Xero <span className="text-green-600 mx-2">x</span> Devcomm</div>
                <div className="mx-8">
                    <Link to="/your_team" > <Button text="Your Team" border_width="1px" width="w-[100px]"/>
                    </Link></div>
                <div className="mx-8">
                    <Link to="/login">
                        <Button text="Login/Register" border_width="1px" width="w-[120px]"/>
                    </Link>
                </div>
                <div className="mx-8">
                    <Link to="/leaderboard" >
                        <Button text="Leaderboard" border_width="1px" width="w-[120px]"/>
                    </Link>
                </div>
        </div>
    );
}

export default Header;