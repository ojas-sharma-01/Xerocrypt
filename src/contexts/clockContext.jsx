import { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";

const clockContext = createContext();

const ClockProvider = ({ children }) => {
    const targetDate = DateTime.local(2024, 9, 28, 0, 0).setZone('Asia/Kolkata'); 
    
    const calculateTimeDifference = () => {
        const now = DateTime.now().setZone('Asia/Kolkata');
        const diff = targetDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);
        return {
            days: diff.days,
            hours: diff.hours,
            minutes: diff.minutes,
            seconds: Math.floor(diff.seconds)
        };
    };

    const [clock, setClock] = useState(calculateTimeDifference);

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(calculateTimeDifference());
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <clockContext.Provider value={{ clock }}>
            {children}
        </clockContext.Provider>
    );
};

export default ClockProvider;
export { clockContext };
