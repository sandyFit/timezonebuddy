import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import moment from 'moment-timezone';

const mockTeamMembers = [
    { name: 'Alice', timeZone: 'Europe/London', workStart: 9, workEnd: 17 },
    { name: 'Bob', timeZone: 'America/New_York', workStart: 8, workEnd: 16 },
    { name: 'Charlie', timeZone: 'Asia/Tokyo', workStart: 10, workEnd: 18 }
];

const FindOptimalTimes = ({ currentUser }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [topSlots, setTopSlots] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            try {
                console.log("FindOptimalTimes received user data:", currentUser);
                generateOptimalSlots();
            } catch (error) {
                console.error("Error generating time slots:", error);
                setTopSlots([]);
            } finally {
                setIsLoading(false);
            }
        }, 500);
    }, [currentUser]);

    const generateOptimalSlots = () => {
        const timeZoneOffsets = mockTeamMembers.map(member => ({
            name: member.name,
            timeZone: member.timeZone,
            workStartUTC: moment.tz(`${member.workStart}:00`, 'HH:mm', member.timeZone).utc().format('HH:mm'),
            workEndUTC: moment.tz(`${member.workEnd}:00`, 'HH:mm', member.timeZone).utc().format('HH:mm')
        }));

        console.log("Team Members with UTC Work Hours:", timeZoneOffsets);

        // Generate a list of possible meeting times (UTC)
        let possibleTimes = [];
        for (let hour = 0; hour < 24; hour++) {
            let timeUTC = moment.utc().startOf('day').add(hour, 'hours');
            let availableCount = 0;

            timeZoneOffsets.forEach(({ workStartUTC, workEndUTC }) => {
                if (
                    timeUTC.format('HH:mm') >= workStartUTC &&
                    timeUTC.format('HH:mm') < workEndUTC
                ) {
                    availableCount++;
                }
            });

            possibleTimes.push({
                time: timeUTC,
                score: availableCount,
                formattedTime: timeUTC.format('HH:mm') + ' UTC'
            });
        }

        // Pick the top 3 best times based on maximum overlap
        const bestSlots = possibleTimes.sort((a, b) => b.score - a.score).slice(0, 3);
        setTopSlots(bestSlots);
    };

    const applyOptimalSlot = (slot) => {
        console.log("Selected time slot:", slot);
        alert(`Selected time: ${slot.formattedTime}`);
    };

    if (isLoading) {
        return <p>Analyzing optimal meeting times...</p>;
    }

    if (topSlots.length === 0) {
        return <p>Unable to generate meeting time suggestions.</p>;
    }

    return (
        <div>
            <p>Best meeting times for the team:</p>
            {topSlots.map((slot, index) => (
                <div key={index}>
                    <strong>{slot.formattedTime}</strong> - {slot.score} team members available
                    <Button onClick={() => applyOptimalSlot(slot)}>Select</Button>
                </div>
            ))}
        </div>
    );
};

export default FindOptimalTimes;
