import Button from "../button_cus/button_cus";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { authContext } from "../../contexts/authcontext";
import { useContext, useEffect, useState } from "react";
import { teamContext } from "../../contexts/teamcontexts";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const auth  = getAuth();
const db = getFirestore();
const Login = () => {
    const { changeTeam, change_team_name } = useContext(teamContext);
    const {user, login, changename} = useContext(authContext);
    const [cred, setcred] = useState({email:"", password:""});
    const [res, setres] = useState('<p></p>');
    const Nav = useNavigate();

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    const handlelogin = (e) => {
        signInWithEmailAndPassword(auth, cred.email, cred.password)
        .then(async (usercred) => {
            // (usercred.user.emailVerified === true) ? (() => {login(); setres('success')}) : (() => {setres('unsuccess')});
            if (usercred.user.emailVerified) {
                login(usercred.user);
                changename(usercred.user.displayName);
                
                const get_team = await getDoc(doc(db, 'Users', usercred.user.uid));

                if (get_team.data().team_id != null ) {
                    const get_team_name = await getDoc(doc(db, 'Teams', get_team.data().team_id));
                    changeTeam(get_team.data().team_id)
                    change_team_name(get_team_name.data().name)
                }

                setres('\
                    <p style="color:green;"> \
                    Logged In \
                    </p>'
                );
            } 
            else {
                setres('\
                    <p style="color:red;"> \
                    Email Not Verified \
                    </p>'
                );
            }
        })
        .catch(e => {
            console.log(e);
            setres(`\
                <p style="color:red;"> \
                ${e.code} \
                </p>`
            );
            // console.log(e.message);
        })
    };

    const handlecred = (e) => {
        const {name, value} = e.target;
        setcred({...cred, [name] : value});
    }

    return (
        <div className="bg-black max-w-[100%] justify-center items-center w-screen flex flex-col text-white overflow-x-hidden">
            <Header />
            <div className="bg-black flex h-screen flex-col items-center">
                <div className="my-20 font-cus2 text-[50px]">Login</div>
                <div className="flex flex-col justify-center items-center h-[30%] text-[20px]">
                    <div className="my-2">
                        <input type="text" value={cred.email} 
                        name="email"
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Email"
                        onChange={handlecred}/>
                    </div>
                    <div className="my-2">
                        <input type="text" value={cred.password}
                        name="password"
                        className="bg-gray-900 border-2 border-white h-[50px] w-[250px] text-center" 
                        placeholder="Enter your Password"
                        onChange={handlecred}/>
                    </div>
                </div>
                <div className="m-8 text-[20px]" onClick={handlelogin}>
                    <Button text="Login" border_width = "p-[1px]" height="h-[50px]" width="w-[100px]"/>
                </div>
                <div className="text-[20px] font-cus2">Click 
                    <Link to="/register" className="hover:bg-gray-900 text-green-300"> here</Link> to create an account.
                </div>
                <div className="bg-black font-cus2 text-[40px] m-10" 
                dangerouslySetInnerHTML={{__html : res}}> 
                </div>
            </div>
        </div>
    );
}

export default Login;