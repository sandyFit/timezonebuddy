import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    // Accessing icons directly from the imported library
    const { homeIcon, globeIcon, calendarIcon, userIcon, clockIcon } = kendoSvgIcons;

    return (
        <aside className="h-[calc(100vh-4rem)] fixed top-[4rem] left-0 flex flex-col items-center 
            justify-center bg-violet-900 shadow-md p-4 pt-12">
            <ul className="w-full h-full flex flex-col gap-4 text-white">
                {[
                    { to: "/dashboard", icon: homeIcon, label: "Home" },
                    { to: "/dashboard/team", icon: userIcon, label: "Team Members" },
                    { to: "/dashboard/timezones", icon: globeIcon, label: "Global Timezones" },
                    { to: "/dashboard/manage-timezones", icon: clockIcon, label: "Manage Timezones" },
                    { to: "/dashboard/meeting-planner", icon: calendarIcon, label: "Meeting Planner" }
                ].map(({ to, icon, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `sidebar-links flex items-center gap-2 p-2 rounded-md 
                            ${isActive ? 'bg-violet-800 text-gray-100' : 'hover:bg-violet-600'}`
                        }
                    >
                        <SvgIcon icon={icon} />
                        <span className="text-[.8rem] uppercase">{label}</span>
                    </NavLink>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
