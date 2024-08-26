import { useEffect, useState } from 'react';
import { firebapp }from '../../fireb';
import { getFirestore, getDocs, query, orderBy, collection } from 'firebase/firestore';
import Header from '../header/header';
import { Link, useNavigate, useParams } from 'react-router-dom';

const db = getFirestore(firebapp);
const Leaderb = () => {
    const nav = useNavigate();
    var { no } = useParams(); 
    no = parseInt(no);
    const [board, setboard] = useState([]);
    const bottomtrail = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const getd = async () => {
        const get_entries = collection(db, "Teams");
        const querys = query(get_entries, orderBy('level', "desc"));
        const q = await getDocs(querys);
        var cnt = -1;

        const newleaderboard = q.docs.map((doc) => {
            return {
                key : doc.id,
                data : doc.data(),
            }
        });
        
        const new_lead = newleaderboard.slice((no-1)*10, (no-1)*10+10);
        setboard(new_lead);
    };

    useEffect(() => {
        getd();
    }, [no]);

    return (
        <div className="bg-black min-h-screen max-w-[100%] text-white font-[Roboto] flex flex-col items-center overflow-x-hidden">
            <Header />
            <div className='bg-black w-[80%] min-h-[70%]'>
                <div className="m-2 2xl:m-6 text-[40px] 2xl:text-[60px] font-cus2"> Leaderboard </div>
                <div className='flex-col items-center m-[40px] mx-0 border-white border-2'>
                    <div className='flex m-[10px] md:m-[30px] border-0 md:border-b-2 border-white mb-16'>
                        <div className='hidden flex-[0.2] md:flex justify-center text-[16px] md:text-[20px]
                        '>Posn</div>
                        <div className='flex-[0.25] flex justify-center text-[16px] md:text-[20px]
                        '>Score</div>
                        <div className='flex-[0.5] flex justify-center text-[16px] md:text-[20px]
                        '>Team_Name</div>
                        <div className='flex-[0.25] flex justify-center text-[16px] md:text-[20px]
                        '>Questions</div>
                    </div>
                    {board.map((ent, index) => {
                        return (<div key={index} className={`flex m-[20px] py-[2px] ${index%2 == 0 ? 'bg-gray-800' : ''}`}>
                            <div className='hidden md:flex flex-[0.2] justify-center'>{index+1}</div>
                            <div className='flex-[0.25] flex justify-center'>{ent.data.level*100}</div>
                            <div className='flex-[0.5] flex justify-center'>{ent.data.name}</div>
                            <div className='flex-[0.25] flex justify-center'>{ent.data.level}</div>
                        </div>)
                    })}
                </div>
            </div>
            <div className='py-10 w-[80%] md:w-[60%]'>
                <div className='flex justify-evenly items-center text-[20px]'>
                    <div><button onClick={() => {if (no > 1) { nav(`/leaderboard/${no-1}`)} }} className='hover:bg-gray-800 p-2 rounded-md'>Prev</button></div>
                    {bottomtrail.map((index) => {
                        return (<div className="hidden md:block" key={index}><Link to={`/leaderboard/${index}`}><button className={`${index === no ? 'bg-gray-800' : ''} hover:bg-gray-800 px-6 rounded-md`}>{index}</button></Link></div>)
                    })}
                    <div className={`md:hidden ${no > 1 ? '' : 'hidden'}`}><Link to={`/leaderboard/${no-1}`}><button className='hover:bg-gray-800 px-2 rounded-md'> { no-1 }</button></Link></div>
                    <div className={`md:hidden ${no > 0 ? '' : 'hidden'}`}><Link to={`/leaderboard/${no}`}><button className='hover:bg-gray-800 px-2 rounded-md'> { no }</button></Link></div>
                    <div className={`md:hidden ${no < 11 ? '' : 'hidden'}`}><Link to={`/leaderboard/${no+1}`}><button className='hover:bg-gray-800 px-2 rounded-md'> { no+1 }</button></Link></div>
                    <div><button  onClick={() => {if (no < 10) { nav(`/leaderboard/${no+1}`) }}} className='hover:bg-gray-800 p-2 rounded-md'>Next</button></div>
                </div>
            </div>
        </div>
    )
}

export default Leaderb;