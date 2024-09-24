import Button from "../button_cus/button_cus";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { authContext } from "../../contexts/authcontext";
import { useContext, useEffect, useState } from "react";
import { teamContext } from "../../contexts/teamcontexts";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import Loading from "../loader/loading_";
import { DB } from "../../firebutil/firestore/firestoredb";

const auth  = getAuth();
const Forgotp = () => {
    const [email, setemail] = useState('');
    const [res, setres] = useState('');

    const send_link = () => {
        setres('');
        console.log(email);
        if (email === '') {
            setres('<p style="color:red;">Invalid email</p>');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setres('<p style="color: green;">Sent reset link to provided email</p>');
        })
        .catch((error) => {
            if (error === 'auth/missing-email') {
                setres('<p style="color:red;">Invalid email</p>');
            }
            else {
                console.log(error);
                setres('<p style="color:red;">Some Error Occured. Try again later.</p>')
            }
        });
    }

    return (
        <div className="bg-black max-w-[100%] justify-center items-center w-screen flex flex-col text-white overflow-x-hidden">
            <Header />
            <div className="bg-black flex h-screen flex-col items-center">
                <div className="h-[500px] flex flex-col justify-evenly mt-[50%]">
                    <div className="font-cus2 text-[30px]">
                        Enter your Email
                    </div>
                    <div>
                    <input type="email" value={email} 
                            name="email"
                            className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                            placeholder="Enter your Email"
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}/>
                    </div>
                    <div onClick={send_link}><Button text="Submit" width="w-[150px]" text_size="text-[25px]" border_width="p-[1px]"/></div>
                    <div className="text-[25px]" dangerouslySetInnerHTML={{ __html: res }}></div>
                </div>
            </div>
        </div>
    );
}

export default Forgotp;