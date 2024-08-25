import Button from "../button_cus/button_cus";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification, getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authContext } from "../../contexts/authcontext";
import { useContext, useEffect, useState } from "react";
import { collection, getFirestore, setDoc, doc } from "firebase/firestore";

const auth  = getAuth();
const db = getFirestore();
const auth_doc = collection(db, 'Users');

const Signup = () => {
    const {user, login} = useContext(authContext);
    const [cred, setcred] = useState({email:"", password:"", username:"", name:""});
    const [res, setres] = useState("");
    const Nav = useNavigate();

    const handlesignup = async (e) => {
        createUserWithEmailAndPassword(auth, cred.email, cred.password)
        .then(async (usercred) => {

            await setDoc(doc(db, 'Users', usercred.user.uid), {
                name: cred.name,
                uid: usercred.user.uid,
                email: usercred.user.email,
                team_id: null,
            });

            await sendEmailVerification(usercred.user);

            await updateProfile(usercred.user, {
                displayName: cred.name
            })
    
            setres('<p style="color:green;">\
                email verification link sent\
                </p>');
        })
        .catch(e => {
            setres(`<p style="color:red;">\
                ${e.message}
                </p>`);
        })
    };

    const handlecred = (e) => {
        const {name, value} = e.target;
        setcred({...cred, [name] : value});
    }

    return (
        <div className="bg-black max-w-[100%] justify-center items-center w-screen flex flex-col text-white overflow-x-hidden">
            <Header />
            <div className="h-screen flex flex-col items-center">
                <div className="my-20 font-cus2 text-[50px]">Signup</div>
                <div className="flex flex-col justify-evenly items-center h-[30%] text-[20px]">
                    <div>
                        <input type="text" value={cred.email} 
                        name="email"
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Email"
                        onChange={handlecred}/>
                    </div>
                    <div>
                        <input type="text" value={cred.password}
                        name="password"
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Password"
                        onChange={handlecred}/>
                    </div>
                    {/* <div>
                        <input type="text" value={cred.username} 
                        name="username"
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your username"
                        onChange={handlecred}/>
                    </div> */}
                    <div>
                        <input type="text" value={cred.name}
                        name="name"
                        
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Name"
                        onChange={handlecred}/>
                    </div>
                </div>
                <div className="m-8 text-[20px]" onClick={handlesignup}>
                    <Button text="Register" border_width = "p-[1px]" height="h-[50px]" width="w-[100px]"/>
                </div>
                <div className="text-[20px] font-cus2">Click 
                    <Link to="/login" className="hover:bg-gray-900 text-green-300"> here</Link> to login.
                </div>
                <div className="font-cus2 text-[30px] m-4" dangerouslySetInnerHTML={{ __html: res }}></div>
            </div>
        </div>
    );
}

export default Signup;