import React from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import '../../styles/meetingCard.css';

const MeetingCard = ({ meeting, attendees = [] }) => {
    const meetingDate = new Date(meeting.date);
    const formattedDate = meetingDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    return (
        <Card className="meeting-card">
            <CardBody>
                <h6 className="meeting-date">{formattedDate}</h6>
                <div className="meeting-info">
                    <span>{meeting.startTime} - {meeting.endTime}</span>
                    <span>{attendees.length} attendee{attendees.length !== 1 ? 's' : ''}</span>
                </div>
                <p className="meeting-description">{meeting.description}</p>
            </CardBody>
        </Card>
    );
};

export default MeetingCard;
