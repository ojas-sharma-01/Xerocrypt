import { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import flag from './flag.png';
import { authContext } from "../../contexts/authcontext";
import { teamContext } from "../../contexts/teamcontexts";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const db = getFirestore();
const YourTeam = () => {
    const {team, team_name} = useContext(teamContext);

    const [team_members, setTeammembers] = useState([]);
    const change_team_members = async () => {
        if (team === null) return;
        const get_team_members = await getDoc(doc(db, 'Teams', team));
        setTeammembers(get_team_members.data().members);
    }

    useEffect(() => {
        change_team_members();
    }, [team])

    return (
        <div className="w-screen max-w-[100%] bg-black flex flex-col items-center text-white font-cus2 overflow-x-hidden">
            <Header />
            
                {team ? <div className="flex flex-col items-center bg-black text-[30px] w-[50%]">
                <div className="my-20 mb-10 md:mb-20 text-[40px] md:text-[60px] text-green-400 font-custom">{ team ? team_name : "Team Name" }</div>
                {/* <div className="my-4"> Team Name </div> */}
                <div className="my-16 mb-2">{team ? `Team Code: ${team}` : "Team Code"} </div>
                <div className="w-fit px-4 flex flex-col my-10 justify-evenly md:w-[40%] border-white border-2
                text-[20px] md:text-[30px]">
                    {team_members.map((ele, index) => {
                        return (
                        <div key={index} className={`flex items-center my-2 ${ele.posn === 'leader' ? 'bg-gray-900' : ''}`}>
                            <div className="flex-[0.5]">{index+1})</div>
                            <div className="flex-1">{ele.mname}</div>
                            <div className="flex-[0.5] flex justify-center">{ele.posn === 'leader' ? <img className="w-[60px]" src={flag}/> : <></>}</div>
                        </div>)
                    })}
                </div></div>:
                    <div className="bg-black flex flex-col items-center text-[20px] md:text-[40px] h-screen">
                        <div className="top-[40%] absolute bg-black">You havent joined any team.</div>
                    </div>
                }
        </div>
    );
}

export default YourTeam;