import { useState } from "react";
import Header from "../header/header";


const YourTeam = () => {
    const [team, setTeam] = useState([
        {
            name : "name",
            posn : "leader",
        },
        {
            name : "name",
            posn : "member",
        },
        {
            name : "name",
            posn : "member",
        },
        {
            name : "name",
            posn : "member",
        }
    ]);

    return (
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-cus2">
            <Header />
            <div className="flex flex-col items-center h-full text-[30px] w-[50%]">
                <div className="my-20 text-[60px] text-green-400 font-custom mb-4">Your Team</div>
                <div className="my-4"> Team Name </div>
                <div className="my-16 mb-2">Team Members</div>
                <div className="flex flex-col my-10 justify-evenly h-[30%] w-[50%] border-white border-2">
                    {team.map((ele, index) => {
                        return (
                        <div className={`flex items-center ${ele.posn === 'leader' ? 'bg-gray-900' : ''}`}>
                            <div className="flex-[0.5]">{index+1})</div>
                            <div className="flex-1">{ele.name}</div>
                            <div className="flex-1">{ele.posn}</div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default YourTeam;