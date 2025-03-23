import React, { useState, useEffect } from "react";
import { SvgIcon } from "@progress/kendo-react-common";
import { clockIcon } from "@progress/kendo-svg-icons";
import teamData from "../data/team"; // Import mock data
import "../styles/userTimezone.css";

const UserTimeZone = () => {
    // Mock current user (Alice, id=1)
    const currentUser = teamData.find(user => user.id === 1);
    const userTimeZone = currentUser?.timeZone || "UTC"; 
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now); 
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="timezone-widget">
            <SvgIcon icon={clockIcon} className="timezone-icon" size="small" />
            <span className="timezone-text">{userTimeZone}</span>
            <span className="current-time">
                {currentTime.toLocaleTimeString("en-US", {
                    timeZone: userTimeZone,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })}
            </span>
        </div>
    );
};

export default UserTimeZone;
