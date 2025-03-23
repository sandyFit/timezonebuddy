import React, { useState, useEffect } from 'react';
import teamData from '../data/team';
import TimezoneCard from './ui/TimeZoneCard';
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';
import '../styles/worldClock.css'; // Import CSS file

const WorldClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timezones = [...new Set(teamData.map(member => member.timeZone))];

    // Get contacts per timezone
    const timezoneData = timezones.map(zone => {
        const contacts = teamData.filter(c => c.timeZone === zone);
        const localHour = new Date(currentTime.toLocaleString('en-US', { timeZone: zone })).getHours();
        return { zone, contacts, localHour, isDaytime: localHour >= 6 && localHour < 18 };
    });

    // Sort: Nighttime first, then daytime
    timezoneData.sort((a, b) => a.isDaytime - b.isDaytime);

    return (
        <section className="world-clock">
            <div className="world-clock-header">
                <SvgIcon icon={clockIcon} size="xlarge" />
                <h5 className="worldClock-title">World Clock</h5>
            </div>
            <div className="world-clock-grid">
                {timezoneData.map(({ zone, contacts }) => (
                    <TimezoneCard key={zone} zone={zone} contacts={contacts} currentTime={currentTime} />
                ))}
            </div>
        </section>
    );
};

export default WorldClock;
