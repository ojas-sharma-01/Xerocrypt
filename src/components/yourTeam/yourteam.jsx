import { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import flag from './flag.png';
import { teamContext } from "../../contexts/teamcontexts";
import { getFirestore, getDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { DB } from "../../firebutil/firestore/firestoredb";
import Button from "../button_cus/button_cus";
import { authContext } from "../../contexts/authcontext";

const YourTeam = () => {
    const {db} = useContext(DB);
    const {team, team_name, changeTeam, change_team_name} = useContext(teamContext);
    const {user} = useContext(authContext);
    const [res, setres] = useState('');
    const [team_members, setTeammembers] = useState([]);
    const change_team_members = async () => {
        if (team === null) return;
        const get_team_members = await getDoc(doc(db, 'Teams', team));
        setTeammembers(get_team_members.data().members);
    }

    const handle_leave = async () => {
        setres('');
        try {
            await setDoc(doc(db, 'Users', user.uid), {
                team_id: null
            }, {
                merge: true
            });

            var isleader = false;
            const curr = await getDoc(doc(db, 'Teams', team));
            var new_team = await curr.data().members;
            const updated_team = new_team.filter(ele => {
                if (ele.id === user.uid) {
                    if (ele.posn === 'leader') {
                        isleader = true;
                    }
                    return false;
                }
                else return true;
            });

            if (isleader) {
                if (updated_team.length > 0) {
                    updated_team[0].posn = 'leader';
                }
            }

            await setDoc(doc(db, 'Teams', team), {
                members: updated_team
            },{
                merge: true
            });

            changeTeam(null);
            change_team_name(null);
            setres(`<p style="color:green;"></p>`)
        }
        catch (e) {
            setres(`<p style="color:red;">Some error occured Try again.</p>`)
        }
    }

    useEffect(() => {
        change_team_members();
    }, [team])

    return (
        <div className="w-screen max-w-[100%] bg-black flex flex-col items-center text-white font-cus2 overflow-x-hidden">
            <Header />
            
                {team ? <div className="flex flex-col items-center bg-black text-[30px] w-[50%] h-screen">
                <div className="my-20 mb-0 md:mb-0 text-[40px] md:text-[60px] text-green-400 font-custom">{ team ? team_name : "Team Name" }</div>
                <div className="my-16 mb-2">{team ? `Team Code: ${team}` : "Team Code"} </div>
                <div className="w-[80%] px-4 flex flex-col my-10 justify-evenly md:w-[40%] border-white border-2
                text-[20px] md:text-[30px]">
                    {team_members.map((ele, index) => {
                        return (
                        <div key={index} className={`flex items-center my-2 ${ele.posn === 'leader' ? 'bg-gray-900' : ''}`}>
                            <div className="flex-[0.5]">{index+1}</div>
                            <div className="flex-1">{ele.mname}</div>
                            <div className="flex-[0.5] flex justify-center">{ele.posn === 'leader' ? <img className="w-[60px]" src={flag} alt="flag"/> : <></>}</div>
                        </div>)
                    })}
                </div>
                <div className="my-10" onClick={handle_leave}> <Button text="Leave" text_size="text-[25px] md:text-[40px]" width="w-[110px] md:w-[170px]" 
                    height="100" border_width="p-[1px]"/> </div>
                </div>:
                    <div className="bg-black flex flex-col items-center text-[20px] md:text-[40px] h-screen">
                        <div className="top-[40%] absolute bg-black">You havent joined any team.</div>
                    </div>
                }
        </div>
    );
}

export default YourTeam;