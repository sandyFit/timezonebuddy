import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Accessing icons directly from the imported library
    const { homeIcon, globeIcon, calendarIcon } = kendoSvgIcons;

    return (
        <aside className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center 
            shadow-md bg-purple-500 p-4 ">
            <ul className="w-full h-full flex flex-col gap-4 text-white">
                <Link to={'/dashboard'}
                    className="sidebar-links">
                    <SvgIcon icon={homeIcon} />
                    <span className=" text-sm uppercase">Home</span>
                </Link>
                <Link to={'/dashboard/timezones'}
                    className="sidebar-links">
                    <SvgIcon icon={globeIcon} />
                    <span className=" text-sm uppercase">Timezones</span>
                </Link>
                <Link to={'/dashboard/meeting-planner'}
                    className="sidebar-links">
                    <SvgIcon icon={calendarIcon} />
                    <span className=" text-sm uppercase">Meeting Planner</span>
                </Link>
            </ul>
        </aside>
    );
};

export default Sidebar;
