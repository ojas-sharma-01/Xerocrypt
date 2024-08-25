import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import Header from "../header/header";
import { memo, useContext, useEffect, useState } from "react";
import { firebapp } from "../../fireb";
import { doc, setDoc, getFirestore, updateDoc, getDoc } from "firebase/firestore";
import { authContext } from "../../contexts/authcontext";
import { teamContext } from '../../contexts/teamcontexts';
import { Link } from "react-router-dom";

const db = getFirestore(firebapp);
const Createteam = () => {
    const [res, setres] = useState('');
    const {user, uname} = useContext(authContext);
    const {team, changeTeam, change_team_name} = useContext(teamContext);
    const [cap, setcap] = useState('');
    const [tname, settname] = useState('');
    const handle_cap = async () => {
        const ret = await fetch('http://localhost:5000/get_captcha');
        const data = await ret.json();
        if (data.type != 'error') {
            setcap(data.message);
        }
    };
    const submit_team = async () => {
        try {
            await setDoc(doc(db, 'Teams', cap), {
                Teamid: cap,
                name: tname,
                members : [{id: user.uid, mname: uname, posn: 'leader'}],
            });

            await updateDoc(doc(db, 'Users', user.uid), {
                team_id: cap
            });

            changeTeam(cap);
            change_team_name(tname);
            setres(`<p style="color:green;">Team Created</p>`)
        }
        catch (e) {
            setres(`<p style="color:red;">Some error occured. Try again.</p>`)
        }
    }

    const handle_create_new_team = async () => {
        try {
            await setDoc(doc(db, 'Users', user.uid), {
                team_id: null
            }, {
                merge: true
            });

            const curr = await getDoc(doc(db, 'Teams', team));
            var new_team = await curr.data().members;
            const updated_team = new_team.filter(ele => ele.id != user.uid ? true : false);

            await setDoc(doc(db, 'Teams', team), {
                members: updated_team
            },{
                merge: true
            });

            changeTeam(null);
            change_team_name(null);
            setres(`<p style="color:green;">New Team Created</p>`)
        }
        catch (e) {
            setres(`<p style="color:red;">Some error occured Try again.</p>`)
        }
    };

    useEffect(() => {
        handle_cap();
        console.log(team);
    }, [team]);


    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            className="relative flex flex-col items-center justify-center bg-black h-screen font-mono w-screen"
         >
            <div className="bg-black h-screen w-screen flex flex-col">
            <Header />
            <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto w-fit h-full">
                {(team === null) ? 
                (<><div className="text-[40px] md:text-[70px] font-cus2 text-green-400"> Create your Team. </div>
                <div>
                    <div className="text-[30px] font-cus2 text-zinc-400 mb-2"> Your Team Id : {cap} </div>
                    <div className="text-[20px] text-white w-full font-cus2 mt-2">
                        <label className="text-zinc-400"> Team Name: </label>
                        <input className="bg-transparent mx-8 border-2 border-gray-700 text-center"
                        value={tname}
                        onChange={(e) => {const {value} = e.target;  settname(value);}}/>
                    </div>
                </div>
                <div className="text-[18px]">
                    Your Teammates are required to enter the same team_id as yours.
                </div>
                <div className="flex justify-evenly w-[40%] font-cus2"
                onClick={submit_team}>
                    <Button className="mx-10" text_size="text-[20px]" text="Create Team" width="w-[150px]" border_width="p-[1px]"
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: res }}>
                </div></>) : 
                (<>
                <div className="text-[30px]">You are already a part of a team.</div>
                <div className="flex">Click<div className="hover:cursor-pointer text-green-500"
                onClick={handle_create_new_team}>&nbsp;here&nbsp;
                    </div>to leave your current team and create a new one</div>
                <div className="text-[20px]">Click <Link to="/join_team" className="text-green-500"> here </Link> to change your team.</div>
                </>)}
            </div>
            </div>
        </motion.div>
    );
}

export default Createteam;