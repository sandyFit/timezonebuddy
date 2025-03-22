import React, { useState, useEffect } from 'react';
import teamData from '../data/team';
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';

const WorldClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const timezones = [...new Set(teamData.map(member => member.timeZone))];

    return (
        <section className='p-8 bg-white rounded-lg shadow'>
             <div className="flex items-center gap-2 mb-6">
                <SvgIcon icon={clockIcon} size='xlarge'/>
                <h5>World Clock</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {timezones.map((zone, index) => {
                    if (!zone) return null; // Prevents errors if zone is undefined

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
                    const contacts = teamData.filter(c => c.timeZone === zone);
                    const locationName = zone.split('/')[1]?.replace('_', ' ') || zone;

                    return (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <p className="">{locationName}</p>
                            <h6>{timeStr}</h6>
                            <div className="flex justify-between items-center">
                                <div className="text-sm text-gray-500">{dateStr}</div>
                                <div className="mt-2 text-sm">
                                    {contacts.length} contact{contacts.length !== 1 ? 's' : ''}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorldClock;
