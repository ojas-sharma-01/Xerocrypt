import { createContext } from "react";
import { firebapp } from "../firebconn/fireb";
import { getFirestore } from "firebase/firestore";

const DB = createContext();
const db = getFirestore(firebapp);

const Dbprovider = ({ children }) => {

    return (
        <DB.Provider value={{ db }}>
            {children}
        </DB.Provider>
    )
}

export default Dbprovider;
export { DB };