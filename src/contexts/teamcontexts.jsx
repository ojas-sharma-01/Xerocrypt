import { createContext, useState } from "react";

const teamContext = createContext();

const TeamProvider = ({ children }) => {
    const [team, setteam] = useState(null);
    const [team_name, setteam_name] = useState(null);

    const changeTeam = (new_team) => {
        setteam(new_team);
    }

    const change_team_name = (new_team_name) => {
        setteam_name(new_team_name);
    }

    return (
        <teamContext.Provider value={{team, changeTeam, change_team_name, team_name}}>
            { children }
        </teamContext.Provider>
    )
}

export default TeamProvider;
export {teamContext}