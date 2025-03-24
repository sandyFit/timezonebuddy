import React, { useState, useEffect } from "react";
import MeetingList from "./MeetingList";
import { SvgIcon } from "@progress/kendo-react-common";
import { clockIcon } from "@progress/kendo-svg-icons";
import "../styles/upcomingMeetings.css";
import meetings from "../data/meetings";  // Import meetings correctly

const UpcomingMeetings = ({ getFilteredMeetings, teamData }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("meetings:", meetings);
        console.log("teamData:", teamData);

        if (meetings && teamData) {
            setIsLoading(false);
        }
    }, [meetings, teamData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const filteredMeetings = getFilteredMeetings();

    return (
        <div className="upcoming-meetings">
            <div className="upcoming-header">
                <SvgIcon icon={clockIcon} size="xlarge" className="clock-icon" />
                <h5 className="upcoming-title">Upcoming Meetings</h5>
            </div>
            <MeetingList meetings={filteredMeetings} teamData={teamData} />
        </div>
    );
};

export default UpcomingMeetings;
