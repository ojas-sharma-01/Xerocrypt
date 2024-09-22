import Button from "../button_cus/button_cus";
import { motion } from "framer-motion";
import Header from "../header/header";
import { useContext, useEffect, useState } from "react";
import { doc, setDoc, updateDoc, getDoc, collection, where, getDocs, query } from "firebase/firestore";
import { authContext } from "../../contexts/authcontext";
import { teamContext } from '../../contexts/teamcontexts';
import { Link } from "react-router-dom";
import Loading from "../loader/loading_";
import { DB } from "../../firebutil/firestore/firestoredb";

const Createteam = () => {
    const {db} = useContext(DB)
    const [loading, setloading] = useState(false);
    const [res, setres] = useState('');
    const {user, uname} = useContext(authContext);
    const {team, changeTeam, change_team_name, change_level} = useContext(teamContext);
    const [cap, setcap] = useState('');
    const [tname, settname] = useState('');
    const handle_cap = async () => {
        const ret = await fetch('https://xero-back.vercel.app/get_captcha');
        const data = await ret.json();
        if (data.type !== 'error') {
            setcap(data.message);
        }
        else if (data.type === 'error1') {
            setres(`<p style="color:red;">Error occured. Try again.</p>`);
        }
        
        else {
            setres(`<p style="color:red;">Too many requests from this IP. try again in 15 mins.</p>`);
        }
    };

    const submit_team = async () => {
        setloading(true);
        try {
            const q = await query(collection(db, 'Teams'), where('name', '==', tname.toUpperCase()));
            const get = await getDocs(q);
            if (!get.empty) {
                setloading(false)
                setres(`<p style="color:red;">Team Name Taken.</p>`)
                return;
            }

            await setDoc(doc(db, 'Teams', cap), {
                Teamid: cap,
                name: tname,
                members : [{id: user.uid, mname: uname, posn: 'leader'}],
                level: 0
            });

            await updateDoc(doc(db, 'Users', user.uid), {
                team_id: cap
            });

            changeTeam(cap);
            change_team_name(tname);
            change_level(0);
            setloading(false)
            setres(`<p style="color:green;">Team Created</p>`)
        }
        catch (e) {
            setloading(false);
            setres(`<p style="color:red;">Some error occured. Try again.</p>`)
        }
    }

    const handle_create_new_team = async () => {
        setloading(true)
        try {
            const q = await query(collection(db, 'Teams'), where('name', '==', tname));
            const get = await getDocs(q);
            if (!get.empty) {
                setloading(false)
                setres(`<p style="color:red;">Team Name Taken.</p>`)
                return;
            }

            await setDoc(doc(db, 'Users', user.uid), {
                team_id: null
            }, {
                merge: true
            });

            const curr = await getDoc(doc(db, 'Teams', team));
            var new_team = await curr.data().members;
            const updated_team = new_team.filter(ele => ele.id !== user.uid ? true : false);

            await setDoc(doc(db, 'Teams', team), {
                members: updated_team
            },{
                merge: true
            });

            changeTeam(null);
            change_team_name(null);
            setloading(false)
            setres(`<p style="color:green;"></p>`)
        }
        catch (e) {
            setloading(false)
            setres(`<p style="color:red;">Some error occured Try again.</p>`)
        }
    };

    useEffect(() => {
        if (team === null) handle_cap();
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
            {user ? <div className="flex flex-col text-white justify-evenly items-center p-[20px] m-auto w-fit h-full">
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
                <div className="text-[35px]"dangerouslySetInnerHTML={{ __html: res }}>
                </div></>) : 
                (<>
                <div className="text-[30px]">You are already a part of a team.</div>
                <div>Click<span className="hover:cursor-pointer hover:bg-gray-900 text-green-300"
                onClick={handle_create_new_team}>&nbsp;here&nbsp;
                    </span>to leave your current team and create a new one</div>
                <div >Click <Link to="/join_team" className="hover:bg-gray-900 text-green-300"> here </Link> to change your team.</div>
                <div className="bg-black m-10 font-cus2 text-[40px] flex justify-center items-center" 
                dangerouslySetInnerHTML={{ __html: res}}
                >
                </div>
                {loading && <div className="bg-black font-cus2 text-[40px] w-[80%] h-[100px] flex justify-center items-center" 
                >
                    <Loading />
                </div> }
                </>)}
            </div> : <div className="text-white text-[30px] my-auto">You are not logged in.</div>}
            </div>
        </motion.div>
    );
}

export default Createteam;