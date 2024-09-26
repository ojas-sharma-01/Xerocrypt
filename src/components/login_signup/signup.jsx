import Button from "../button_cus/button_cus";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification, getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authContext } from "../../contexts/authcontext";
import { useContext, useEffect, useState } from "react";
import { collection, getFirestore, setDoc, doc } from "firebase/firestore";
import Loading from "../loader/loading_";
import { DB } from "../../firebutil/firestore/firestoredb";

const auth  = getAuth();

const Signup = () => {
    const {db} = useContext(DB);
    const [loading, setloading] = useState(false);
    const {user, login} = useContext(authContext);
    const [cred, setcred] = useState({email:"", password:"", username:"", name:""});
    const [res, setres] = useState("");
    const Nav = useNavigate();

    const handlesignup = async (e) => {
        setres('');
        setloading(true);

        if (cred.email.length === 0 || cred.password.length === 0 || cred.name.length === 0) {
            setloading(false);
            setres(`<p style="color:red;"> One or more field is empty. </p>`)
            return;
        }

        const allowedDomain = 'nsut.ac.in';
        const emailDomain = cred.email.split('@')[1];

        if (emailDomain !== allowedDomain) {
            setloading(false);
            setres('<p style="color:red;">\
                Please use your NSUT email ID (....@nsut.ac.in).\
                </p>');
            return;
        }


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
            
            setloading(false);
            setres('<p style="color:green;">\
                email verification link sent.\
                </p>');
        })
        .catch(e => {
            setloading(false);
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
                <div className="my-20 font-cus2 text-[50px]">Signup<p className="text-[20px] text-green-500">* USE NSUT ID ONLY *</p></div>
                <div className="flex flex-col justify-evenly items-center h-[30%] text-[20px]">
                    <div>
                        <input type="email" value={cred.email} 
                        name="email"
                        required={true}
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Email"
                        onChange={handlecred}/>
                    </div>
                    <div>
                        <input type="password" value={cred.password}
                        name="password"
                        required={true}
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
                <div className="text-[20px] font-cus2">Click <Link to="/login" className="hover:bg-gray-900 text-green-300">here</Link> to login.
                </div>
                <div className="bg-black m-10 font-cus2 text-[40px] flex justify-center items-center" 
                dangerouslySetInnerHTML={{ __html: res}}
                >
                </div>
                {loading && <div className="bg-black font-cus2 text-[40px] w-[80%] h-[100px] flex justify-center items-center" 
                >
                    <Loading />
                </div> }
            </div>
        </div>
    );
}

export default Signup;