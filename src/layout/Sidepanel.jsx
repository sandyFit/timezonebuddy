import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { NavLink } from 'react-router-dom';
import { Avatar, PanelBar } from '@progress/kendo-react-layout';
import teamData from '../data/team';

const Sidepanel = () => {
    const { homeIcon, calendarIcon, userIcon } = kendoSvgIcons;

    // Get the first employee (or adjust as needed)
    const employee = teamData[0];

    if (!employee) {
        return <div>Employee not found.</div>;
    }

    return (
        <aside className="sidebar">
            <div className="avatar-container">
                <Avatar rounded="full" size="large" type="image">
                    <img src={employee.imageSrc} alt="Employee Avatar" className="avatar-img" />
                </Avatar>
                <div className="avatar-info">
                    <p className="avatar-title">{employee.name}</p>
                    <p className="avatar-text">{employee.jobTitle}</p>
                    <p className="avatar-text">{employee.timeZone}</p>
                </div>
            </div>

            <PanelBar className="sidebar-panelbar">
                <NavLink to="/dashboard" className="sidebar-link">
                    <SvgIcon icon={homeIcon} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/dashboard/team" className="sidebar-link">
                    <SvgIcon icon={userIcon} />
                    <span>Team Members</span>
                </NavLink>
                <NavLink to="/dashboard/meeting-planner" className="sidebar-link">
                    <SvgIcon icon={calendarIcon} />
                    <span>Meeting Planner</span>
                </NavLink>
            </PanelBar>
        </aside>
    );
};

export default Sidepanel;
