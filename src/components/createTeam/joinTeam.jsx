import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import Header from "../header/header";
import { useContext, useState } from "react";
import { teamContext } from "../../contexts/teamcontexts";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { firebapp } from "../../fireb";
import { authContext } from "../../contexts/authcontext";
import Loading from "../loader/loading_";

const db = getFirestore(firebapp);
const Jointeam = () => {
    const [loading, setloading] = useState(false);
    const [res, setres] = useState('');
    const [team_id, setteam_id] = useState('');
    const {user, uname} = useContext(authContext);
    const {team, changeTeam, change_team_name} = useContext(teamContext);
    const handle_teamchange = async () => {
        setloading(true);
        try {
            const q = query(collection(db, 'Teams'), where('Teamid', '==', team_id))
            const curr_team = await getDocs(q);
            
            if (curr_team.empty) {
                setloading(false)
                setres(`<p style="color:red;">No team exists with given code.</p>`)
                return;
            }
            if (team != null) {
                const get_all_teams = collection(db, 'Teams');
                const q = query(collection(db, 'Teams'), where('Teamid', '==', team))
                const curr_team = await getDocs(q);

                curr_team.forEach(async (ele) => {
                    const get_user_in_curr_team = await ele.data().members;
                    const updated_members = get_user_in_curr_team.filter(ele => user.uid != ele.id ? true : false);

                    await setDoc(doc(db, 'Teams', team), {
                        Teamid: team,
                        members: updated_members 
                    }, {
                        merge: true,
                    })
                })
            }
            
            const get_team = await getDoc(doc(db, 'Teams', team_id));
            var new_team = await get_team.data().members;
            new_team.push({
                id: user.uid,
                mname: uname,
                posn: 'member',
            });
            await setDoc(doc(db, 'Teams', team_id), {
                members: new_team
            }, {
                merge: true
            });

            await setDoc(doc(db, 'Users', user.uid), {
                team_id: team_id,
            }, {
                merge: true
            })

            changeTeam(team_id);
            change_team_name(get_team.data().name);
            setloading(false)
            setres(`<p style="color:green;">Joined team with code ${team_id}</p>`)
        }
        catch (e) {
            console.log(e);
            setloading(false)
            setres(`<p style="color:red;">Some error occured. Try again</p>`)
        }
    };


    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono"
         >
            <div className="bg-black h-screen flex flex-col w-screen">
                <Header />
                {user ? <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto h-full">
                    <div className="text-[40px] md:text-[70px] font-cus2 text-green-400">Join a Team.</div>
                    <div className="text-[30px] flex flex-col text-white w-full font-cus2">
                        <div className="mb-2">Enter the ID of the team you want to join.</div>
                        <div className="mt-2">
                            <input type="text" value={team_id} 
                        name="team_id"
                        onChange={(e) => {const {value} = e.target; setteam_id(value);}}
                        className="bg-gray-900 border-2 border-white h-[40px] w-[250px] text-center" />
                        </div>
                    </div>
                    <div className="flex justify-center w-[40%]"
                    onClick={handle_teamchange}>
                    <Button className="mx-10" text_size="text-[20px] md:text-[30px]" text="Join/Change" 
                    width="w-[240px]" height="100px" border_width="p-[1px]"/>
                    </div>
                    <div className="bg-black m-10 font-cus2 text-[40px] flex justify-center items-center" 
                dangerouslySetInnerHTML={{ __html: res}}
                >
                </div>
                {loading && <div className="bg-black font-cus2 text-[40px] w-[80%] h-[150px] flex justify-center items-center" 
                >
                    <Loading />
                </div> }
                </div>
                : <div className="text-[30px] text-white my-auto">You are not logged in.</div>}
            </div>
        </motion.div>
    );
}

export default Jointeam;