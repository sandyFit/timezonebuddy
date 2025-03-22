import React from 'react';
import { Card, CardHeader, CardBody } from '@progress/kendo-react-layout';

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

    // Define the styles object explicitly instead of using Tailwind classes
    const cardStyle = {
        backgroundColor: isDaytime ? '#fef9c3' : '#4d179a', // yellow-100 or blue-900
        color: isDaytime ? '#000000' : '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    };

    const titleStyle = {
        fontWeight: 500,
        fontSize: '.9rem',
        color: isDaytime ? '#000000' : '#ffffff'  
    };

    const iconStyle = {
        fontSize: '1rem',
        color: isDaytime ? '#eab308' : '#9ca3af' 
    };

    return (
        <Card style={cardStyle}>
            <CardHeader className="flex items-center justify-between">
                <p style={titleStyle}>{zone.replace('_', ' ')}</p>
                <span style={iconStyle}>
                    {isDaytime ? '☀️' : '🌙'}
                </span>
            </CardHeader>
            <CardBody>
                <h6 style={{ margin: '0.2rem 0' }}>{timeStr}</h6>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.875rem' }}>{dateStr}</div>
                    <div style={{ marginTop: '0.2rem', fontSize: '0.875rem' }}>
                        {contacts.length} contact{contacts.length !== 1 ? 's' : ''}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default TimezoneCard;
