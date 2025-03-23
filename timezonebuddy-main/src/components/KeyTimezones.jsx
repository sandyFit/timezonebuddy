import React from 'react';
import TimezoneCard from './ui/TimeZoneCard';

const KeyTimezones = ({ keyTimezones, currentTime }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyTimezones.map(([zone, contacts], index) => (
                <TimezoneCard key={index} zone={zone} contacts={contacts} currentTime={currentTime} />
            ))}
        </div>
    );
};

export default KeyTimezones;

