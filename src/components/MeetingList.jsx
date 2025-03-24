import React from "react";
import MeetingCard from "./ui/MeetingCard";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import '../styles/meetingsList.css';

const MeetingList = ({ meetings, teamData }) => {
    // Log the meetings and teamData to see if they are coming correctly
    console.log('meetings received:', meetings);
    console.log('teamData received:', teamData);

    // Ensure meetings is always an array and has at least one item
    if (!Array.isArray(meetings) || meetings.length === 0) {
        return <div>No meetings available</div>;
    }

    if (!Array.isArray(teamData) || teamData.length === 0) {
        return <div>No team data available</div>;
    }

    return (
        <div className="meeting-list">
            <PanelBar className="panel-bar">
                {meetings.map((meeting, index) => {
                    // Ensure meeting.attendees is an array
                    const attendees = Array.isArray(meeting.attendees)
                        ? teamData.filter((teamMember) =>
                            meeting.attendees.includes(teamMember.id)
                        )
                        : [];

                    console.log('attendees for meeting:', attendees);

                    return (
                        <PanelBarItem
                            title={meeting.title}
                            key={`${meeting.id}-${index}`}
                            className="panel-bar-item"
                        >
                            <MeetingCard meeting={meeting} attendees={attendees} />
                        </PanelBarItem>
                    );
                })}
            </PanelBar>
        </div>
    );
};

export default MeetingList;
