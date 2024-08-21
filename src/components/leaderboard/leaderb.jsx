import { useEffect, useState } from 'react';
import { firebapp }from '../../fireb';
import { getFirestore, getDocs, query, orderBy, collection } from 'firebase/firestore';
import Header from '../header/header';

const db = getFirestore(firebapp);
const Leaderb = () => {
    const [board, setboard] = useState([]);
    const bottomtrail = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const getd = async () => {
        const get_entries = collection(db, "leaderboard");
        const querys = query(get_entries, orderBy('score', "desc"));
        const q = await getDocs(querys);
        var cnt = -1;

        const newleaderboard = q.docs.map((doc) => {
            return {
                key : doc.id,
                data : doc.data(),
            }
        });

        setboard(newleaderboard);
    };

    useEffect(() => {
        getd();
    }, []);

    return (
        <div className="bg-black text-white h-screen font-[Roboto] flex flex-col items-center w-screen">
            <Header />
            <div className=' bg-black w-[80%]'>
                <div className="m-16 text-[60px] font-cus2"> Leaderboard </div>
                <div className='flex-col items-center m-[40px] mx-0 border-white border-2'>
                    <div className='flex m-[30px] border-b-2 border-white mb-16 h-[80%]'>
                        <div className='flex-[0.2] flex justify-center text-[20px]'>Posn</div>
                        <div className='flex-[0.25] flex justify-center text-[20px]'>Score</div>
                        <div className='flex-[0.5] flex justify-center text-[20px]'>Team_Name</div>
                        <div className='flex-[0.25] flex justify-center text-[20px]'>Questions</div>
                    </div>
                    {board.map((ent, index) => {
                        return (<div key={index} className={`flex m-[20px] py-[2px] ${index%2 == 0 ? 'bg-gray-800' : ''}`}>
                            <div className='flex-[0.2] flex justify-center'>{index+1}</div>
                            <div className='flex-[0.25] flex justify-center'>{ent.data.score}</div>
                            <div className='flex-[0.5] flex justify-center'>{ent.data.name}</div>
                            <div className='flex-[0.25] flex justify-center'>{ent.data.questions}</div>
                        </div>)
                    })}
                </div>
            </div>
            <div className='fixed bottom-0 py-10 w-[60%]'>
                <div className='flex justify-evenly items-center text-[20px]'>
                    <div><button className='hover:bg-gray-800 p-2 rounded-md'>Prev</button></div>
                    {bottomtrail.map((index) => {
                        return (<div><button className='hover:bg-gray-800 px-6 rounded-md'>{index}</button></div>)
                    })}
                    <div><button className='hover:bg-gray-800 p-2 rounded-md'>Next</button></div>
                </div>
            </div>
        </div>
    )
}

export default Leaderb;