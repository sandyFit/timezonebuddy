import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Accessing icons directly from the imported library
    const { homeIcon, globeIcon, calendarIcon } = kendoSvgIcons;

    return (
        <aside className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center shadow-md
         bg-purple-500 p-6 ">
            <ul className="w-full h-full flex flex-col gap-4 text-white text-xs uppercase">
                <Link to={'/dashboard'} className="flex items-center gap-2 cursor-pointer hover:bg-purple-600 p-2 rounded-lg transition-colors">
                    {/* Remove any custom styling from the SvgIcon and use it with minimal props */}
                    <SvgIcon icon={homeIcon} />
                    <span className="text-white">Home</span>
                </Link>
                <Link to={'/dashboard/timezones'} className="flex items-center gap-2 cursor-pointer hover:bg-purple-600 p-2 rounded-lg transition-colors">
                    <SvgIcon icon={globeIcon} />
                    <span className="text-white">Timezones</span>
                </Link>
                <Link to={'/dashboard/meeting-planner'} className="flex items-center gap-2 cursor-pointer hover:bg-purple-600 p-2 rounded-lg transition-colors">
                    <SvgIcon icon={calendarIcon} />
                    <span className="text-white">Meeting Planner</span>
                </Link>
            </ul>
        </aside>
    );
};

export default Sidebar;
