import { createContext, useContext, useState, useEffect } from "react";
import { teamContext } from "./teamcontexts";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { DB } from "../firebutil/firestore/firestoredb";

const authContext = createContext();
const auth = getAuth();
const AuthProvider = ({ children }) => {
    const {db} = useContext(DB);
    const {changeTeam, change_team_name} = useContext(teamContext);
    const [user, setuser] = useState(null);
    const [uname, setuname] = useState(null);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (document.cookie) {
                    const token = getCookie('token');
                    setuser({uid: token});
                    const d = await getDoc(doc(db, 'Users', token));
                    setuname(d.data().name);
                    changeTeam(d.data().team_id);
                    if (d.data().team_id != null) {
                        const de = await getDoc(doc(db, 'Teams', d.data().team_id));
                        change_team_name(de.data().name);
                    }
                }
            } catch (error) {
                console.log("User is not authenticated:", error);
            }
        };
        if (!user) checkAuth();
    }, []);

    const changename = (n) => {
        setuname(n);
    }
    
    const login = (use) => {
        setuser(use);
        document.cookie = `token=${use.uid}; path=/; max-age=${60 * 60 * 24 * 7}`;
    }

    const logout = () => {
        setuname(null);
        setuser(null);
        document.cookie = "token=; path=/; max-age=0";
        changeTeam(null);
        change_team_name(null);
        signOut(auth).then(() => {
            console.log('User signed out successfully');
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    }

    return (
        <authContext.Provider value={{user, login, logout, changename, uname}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
export { authContext };