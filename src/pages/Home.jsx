import React, { useState, useEffect } from 'react';
import teamData from '../data/team';
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';
import KeyTimezones from '../components/KeyTimezones';
import TimeComparisonWidget from '../components/TimeComparisonWidget';

const Home = () => {
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

    // Get most common timezones
    const sortedTimezones = Object.entries(groupedTimezones).sort((a, b) => b[1].length - a[1].length);
    const keyTimezones = sortedTimezones.slice(0, 4); // Top 3 most common

    return (
        <main className='w-full h-screen flex flex-col mt-16 gap-8'>
            <section className="p-8 bg-white rounded-lg shadow">
                <div className="flex items-center text-violet-900 gap-2 mb-6">
                    <SvgIcon icon={clockIcon} size="xlarge" />
                    <h5 className="">Key Timezones</h5>
                </div>
                <KeyTimezones keyTimezones={keyTimezones} currentTime={currentTime} />
            </section>

            <section className="p-8 bg-white rounded-lg shadow">
                <TimeComparisonWidget />
            </section>
        </main>
    );
};

export default Home;
