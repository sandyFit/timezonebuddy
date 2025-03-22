import React, { useState, useEffect } from 'react';
import teamData from '../data/team';
import TimezoneCard from './ui/TimeZoneCard';
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';

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
        <section className='p-8 bg-white rounded-lg shadow'>
            <div className="flex items-center text-violet-900 gap-2 mb-6">
                <SvgIcon icon={clockIcon} size="xlarge" />
                <h5 className="">All Timezones</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {timezoneData.map(({ zone, contacts }) => (
                    <TimezoneCard key={zone} zone={zone} contacts={contacts} currentTime={currentTime} />
                ))}
            </div>
        </section>
    );
};

export default WorldClock;
