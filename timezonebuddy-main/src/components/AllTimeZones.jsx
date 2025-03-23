import React from 'react';
import { ListView } from '@progress/kendo-react-listview';

const WorldClock = ({ allTimezones, currentTime }) => {
    return (
        <ListView
            data={allTimezones}
            item={(props) => {
                const { timeZone, members } = props.dataItem; // Now `dataItem` is an object
                const timeStr = currentTime.toLocaleTimeString('en-US', { timeZone });

                return (
                    <div>
                        <strong>{timeZone.replace('_', ' ')}</strong>: {timeStr} ({members.length} members)
                    </div>
                );
            }}
        />
    );
};

export default WorldClock;
