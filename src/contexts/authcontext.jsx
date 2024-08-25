import { createContext, useContext, useState } from "react";
import { teamContext } from "./teamcontexts";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const {changeTeam, change_team_name} = useContext(teamContext);
    const [user, setuser] = useState(null);
    const [uname, setuname] = useState(null);

    const changename = (n) => {
        setuname(n);
    }
    
    const login = (use) => {
        setuser(use);
    }

    const logout = () => {
        setuname(null);
        setuser(null);
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