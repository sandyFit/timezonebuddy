import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@progress/kendo-react-layout';
import teamData from '../data/team';

const Sidebar = () => {
    const { homeIcon, calendarIcon, userIcon, clockIcon } = kendoSvgIcons;

    // Get the first employee (or adjust as needed)
    const employee = teamData[0];

    if (!employee) {
        return <div>Employee not found.</div>;
    }

    return (
        <aside className="sidebar">
            <ul className="sidebar-menu">
                {[
                    { to: "/dashboard", icon: homeIcon, label: "Home" },
                    { to: "/dashboard/team", icon: userIcon, label: "Team Members" },
                    { to: "/dashboard/meeting-planner", icon: calendarIcon, label: "Meeting Planner" }
                ].map(({ to, icon, label }) => (
                    <NavLink key={to} to={to} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                        <SvgIcon icon={icon} />
                        <span className="sidebar-text">{label}</span>
                    </NavLink>
                ))}
            </ul>

            <div className="avatar-container">
                <Avatar rounded="full" size="large" type="image">
                    <img src={employee.imageSrc} alt="First Contact" className='avatar-img'/>
                </Avatar>
                <div className="avatar-info">
                    <p className='avatar-title'>{employee.name}</p>
                    <p className='avatar-text'>{employee.jobTitle}</p>
                    <p className='avatar-text'>{employee.timeZone}</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
