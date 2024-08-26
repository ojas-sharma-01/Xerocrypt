import { useContext, useEffect, useState } from "react";
import Header from "../components/header/header";
import Button from "../components/button_cus/button_cus";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { firebapp } from "../fireb";
import { teamContext } from "../contexts/teamcontexts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import questions from "./questions";
import Loading from "../components/loader/loading_";

const db = getFirestore(firebapp);
const Ques_temp = () => {
    const [loading, setloading] = useState(false);
    var { q_no } = useParams();
    q_no = parseInt(q_no);
    const { team } = useContext(teamContext);
    const Nav = useNavigate();
    const [res, setres] = useState('');
    const [ans, setans] = useState('');
    const [can_move, set_can_move] = useState(false);

    const check_ans = async () => {
        setloading(true);
        try {
            const ret = await fetch(`https://xero-back.vercel.app/check_ans?q_no=${q_no}&ans=${ans}`);
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
                await setDoc(doc(db, 'Teams', team), {
                    level: Math.max(curr, q_no)
                }, {merge: true});
                
                set_can_move(true);
            }
            else {
                setloading(false);
                setres(`<p style="color:red;"> Incorrect </p>`);
            }
        }
        catch (e) {
            console.log(e);
            setloading(false);
            setres(`<p>Error occured. Try again.</p>`)
        }
    }

    useEffect(() => {
        if (team === null) { Nav('/') } 
        set_can_move(false);
        setloading(false)
        setans('');
        setres('');
    }, [q_no, team])

    return (
        <div className="bg-black text-white h-screen flex flex-col max-w-[100%] overflow-x-hidden">
            <Header />
            <div className="text-[60px] flex justify-center mt-10 font-cus2">
                <div className="w-[80%] flex justify-start">{ q_no } .</div>
            </div>
            <div className="flex justify-center min-h-[50%]">
                <div className="text-[30px] m-10 justify-start flex w-[80%]">
                    {questions[q_no-1].question}
                </div>
            </div>
            <div className="flex flex-col w-[70%] md:w-[30%] items-center self-center">
                <input value={ans}
                onChange={(e) => { const {value} = e.target; setans(value);}} className="bg-gray-800 border-2 border-white text-center 
                font-cus2 text-[25px] h-[40px] w-[220px] mb-12" type="text" name="answer" placeholder="enter your answer"/>
                <div onClick={check_ans}><Button text="Submit" width="w-[150px]" height="h-[40px]" text_size="text-[30px]" border_width="p-[1px] "/></div>
            </div>
            <div>
            <div className="bg-black m-10 font-cus2 text-[40px] flex justify-center items-center" 
                dangerouslySetInnerHTML={{ __html: res}}
                >
                </div>
                {loading && <div className="bg-black font-cus2 text-[40px] w-[80%] h-[150px] flex justify-center items-center" 
                >
                    <Loading />
            </div> }
            {can_move && <div className="flex justify-center" onClick={() => {
                Nav(`/ques/${q_no+1}`);
            }}><Button text="Move to Next" width="w-[250px]" height="h-[40px]" text_size="text-[30px]" border_width="p-[1px] "/></div>}
            </div>
        </div>
    )
}

export default Ques_temp;