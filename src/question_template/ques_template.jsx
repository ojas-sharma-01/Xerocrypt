import { useContext, useEffect, useState } from "react";
import Header from "../components/header/header";
import Button from "../components/button_cus/button_cus";
import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { teamContext } from "../contexts/teamcontexts";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loader/loading_";
import { DB } from "../firebutil/firestore/firestoredb";

const Ques_temp = () => {
    const {db} = useContext(DB);
    const [loading, setloading] = useState(false);
    const [ques, setques] = useState({q_no:'', title:'', question:''});
    const { team, leve, change_level } = useContext(teamContext);
    const Nav = useNavigate();
    const [res, setres] = useState('');
    const [ans, setans] = useState('');
    // const [can_move, set_can_move] = useState(false);

    const get_ques = async (no) => {
        try {
            const ret = await fetch(`https://xero-back2.vercel.app/ges?q_no=${no}`);
            const dat = await ret.json();

            setques(dat.message);
        }
        catch (e) {
            console.log(e);
        }
    };

    const check_ans = async () => {
        setres('');
        setloading(true);
        if (ans.length === 0) {
            setloading(false);
            setres(`<p style="color:red;"> Incorrect </p>`);   
            return;
        }
        // set_can_move(false);
        try {
            const ret = await fetch(`https://xero-back2.vercel.app/check_an?q_no=${leve+1}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    answ: ans,
                    tid: team
                })
            });
            const data = await ret.json();

            if (data.type === 'error') {
                setloading(false);
                setres(`<p style="color:red;">Error occured. Try again.</p>`)
                return;
            }
            
            if (data.message === true) {
                setloading(false);
                setres(`<p style="color:green;"> Correct. </p>`);
                const curr = (await getDoc(doc(db, 'Teams', team))).data().level;
               
                if (curr < leve + 1) {
                    await setDoc(doc(db, 'Teams', team), {
                        level: leve + 1,
                        lastCorrectAnswerAt: serverTimestamp()
                    }, { merge: true });
                }
                
                change_level(leve+1);
                setres('');
                setans('');
                // set_can_move(true);
            }
            else {
                setloading(false);
                setres(`<p style="color:red;"> Incorrect </p>`);
            }
        }
        catch (e) {
            console.log(e);
            setloading(false);
            setres(`<p style="color: red;">Error occured. Try again.</p>`)
        }
    }

    useEffect(() => {
        if (team === null) { Nav('/') } 
        // set_can_move(false);
        setloading(false)
        setans('');
        setres('');
    }, [team, Nav])

    useEffect(() => {
        get_ques(leve+1);
    }, [leve]);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col max-w-[100%] overflow-x-hidden">
            <Header />
            {leve === 18 ? 
            <>
                <div className="text-[50px] text-green-400 m-auto font-cus2">
                    yayy .
                </div>
                </>:
                <>
                <div className="text-[25px] md:text-[40px] my-64 font-cus2">
                    khatam. gn
                </div>
                {/* <div className="text-[60px] flex justify-center mt-10 font-cus2">
                <div className="w-[80%] flex justify-start">{ leve+1 } . {ques.title} </div>
            </div>
            <div className="flex justify-center min-h-[30%] items-center w-full">
                <div className="w-[85%] md:w-[80%] my-10 text-[25px] text-left" dangerouslySetInnerHTML={{ __html:ques.question }}>
                </div>
            </div>
            <div className="flex flex-col w-[70%] md:w-[30%] items-center self-center">
                <input value={ans}
                onChange={(e) => { const {value} = e.target; setans(value);}} className="bg-gray-800 border-2 border-white text-center 
                font-cus2 text-[25px] h-[40px] w-[220px] mb-12" type="text" name="answer" placeholder="enter your answer"/>
                <div onClick={check_ans}><Button text="Submit" width="w-[150px]" height="h-[40px]" text_size="text-[30px]" border_width="p-[1px] "/></div>
            </div> */}
            <div>
            {/* <div className="bg-black m-10 font-cus2 text-[40px] flex justify-center items-center" 
                dangerouslySetInnerHTML={{ __html: res}}
                >
                </div>
                {loading && <div className="bg-black font-cus2 text-[40px] w-[100%] h-[100px] flex justify-center items-center" 
                >
                    <Loading />
            </div> } */}
            {/* {can_move && <div className="flex justify-center" onClick={() => {
                Nav(`/ques`);
            }}><Button text="Move to Next" width="w-[250px]" height="h-[40px]" text_size="text-[30px]" border_width="p-[1px] "/></div>} */}
            </div>
                </>}
        </div>
    )
}

export default Ques_temp;