import React, { useState, useEffect } from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';
import '@progress/kendo-theme-default/dist/all.css';

// Static data defined outside component to prevent re-creation
const STATIC_LOCATIONS = [
    { name: 'New York', timezone: 'America/New_York', workHours: { start: 9, end: 17 } },
    { name: 'London', timezone: 'Europe/London', workHours: { start: 9, end: 17 } },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', workHours: { start: 9, end: 17 } },
    { name: 'Sydney', timezone: 'Australia/Sydney', workHours: { start: 9, end: 17 } }
];

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

// Pre-calculate chart data once outside the component
const CHART_DATA = STATIC_LOCATIONS.map((location, index) => {
    const hourValues = HOURS.map(hour => {
        return (hour >= location.workHours.start && hour < location.workHours.end) ? 1 : 0;
    });

    return {
        name: location.name,
        data: hourValues,
        color: COLORS[index % COLORS.length]
    };
});

const TimeComparisonWidget = () => {
    const [currentTimes, setCurrentTimes] = useState([]);

    useEffect(() => {
        // Function to calculate current time in each timezone
        const updateTimes = () => {
            const now = new Date();

            const times = STATIC_LOCATIONS.map((location, index) => {
                try {
                    const options = {
                        timeZone: location.timezone,
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    };

                    return {
                        name: location.name,
                        time: now.toLocaleTimeString('en-US', options),
                        color: COLORS[index % COLORS.length]
                    };
                } catch (e) {
                    return {
                        name: location.name,
                        time: "Unable to determine time",
                        color: COLORS[index % COLORS.length]
                    };
                }
            });

            setCurrentTimes(times);
        };

        updateTimes();

        const intervalId = setInterval(updateTimes, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <div className="flex items-center text-violet-900 gap-2 mb-6">
                <SvgIcon icon={clockIcon} size="xlarge" />
                <h5 className="">Working Hours Comparison</h5>
            </div>

            <Chart style={{ height: 200 }}>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        categories={HOURS.map(h => `${h}:00`)}
                    />
                </ChartCategoryAxis>

                <ChartSeries>
                    {CHART_DATA.map((item, index) => (
                        <ChartSeriesItem
                            key={`series-${index}`}
                            type="area"
                            data={item.data}
                            name={item.name}
                            color={item.color}
                            opacity={0.5}
                        />
                    ))}
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default TimeComparisonWidget;
