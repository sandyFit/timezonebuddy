import React, { useState, useEffect } from 'react';
import teamData from '../data/team';
import WorldClock from '../components/WorldClock';

const Timezones = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Group contacts by timezone
    const groupedTimezones = teamData.reduce((acc, member) => {
        if (!acc[member.timeZone]) acc[member.timeZone] = [];
        acc[member.timeZone].push(member);
        return acc;
    }, {});

    const allTimezones = Object.entries(groupedTimezones);

    return (
        <section className='w-full h-screen flex flex-col mt-16 gap-8'>           
            <WorldClock allTimezones={allTimezones} currentTime={currentTime} />
        </section>
    );
};

export default Timezones;
