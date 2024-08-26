import { createContext, useContext, useState, useEffect } from "react";
import { teamContext } from "./teamcontexts";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebapp } from "../fireb";

const authContext = createContext();
const db = getFirestore(firebapp);
const AuthProvider = ({ children }) => {
    const {changeTeam, change_team_name} = useContext(teamContext);
    const [user, setuser] = useState(null);
    const [uname, setuname] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const ret = await fetch("https://xero-back.vercel.app/api/auth/check", {
                    credentials: 'include',
                });
                const response = await ret.json();
                if (response.isAuthenticated) {
                    setuser({uid: response.token});
                    const d = await getDoc(doc(db, 'Users', response.token));
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
        document.cookie = `token=${use.uid}; Secure; path=/; max-age=${60 * 60 * 24 * 7}`;
        console.log(document.cookie);
    }

    const logout = () => {
        setuname(null);
        setuser(null);
        document.cookie = "token=; path=/; Secure; max-age=0";
        changeTeam(null);
        change_team_name(null);
    }

    return (
        <authContext.Provider value={{user, login, logout, changename, uname}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
export { authContext };