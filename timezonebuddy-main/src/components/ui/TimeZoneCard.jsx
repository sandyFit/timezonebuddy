import React from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';
import '../../styles/timezoneCard.css'; 

const TimezoneCard = ({ zone, contacts, currentTime }) => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: zone
    };
    const timeStr = currentTime.toLocaleTimeString('en-US', options);
    const dateStr = currentTime.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZone: zone
    });

    const localHour = new Date(currentTime.toLocaleString('en-US', { timeZone: zone })).getHours();
    const isDaytime = localHour >= 6 && localHour < 18;

    return (
        <Card className={`timezone-card ${isDaytime ? 'day' : 'night'}`}>
            <CardHeader className="timezone-card-header">
                <p className={`timezone-title ${isDaytime ? 'day' : 'night'}`}>
                    {zone.replace('_', ' ')}
                </p>
                <span className="timezone-icon">{isDaytime ? '☀️' : '🌙'}</span>
            </CardHeader>
            <CardBody className="timezone-card-body">
                <p className="timezone-time">{timeStr}</p>
                <div className="timezone-details">
                    <div className="timezone-date">{dateStr}</div>
                    <div className="timezone-contacts">
                        {contacts.length} contact{contacts.length !== 1 ? 's' : ''}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default TimezoneCard;
