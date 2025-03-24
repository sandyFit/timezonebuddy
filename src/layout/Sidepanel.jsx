import React from 'react';
import { SvgIcon } from '@progress/kendo-react-common';
import * as kendoSvgIcons from '@progress/kendo-svg-icons';
import { NavLink } from 'react-router-dom';
import { Avatar, PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import teamData from '../data/team';

const Sidebar = () => {
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

            {/* Kendo PanelBar */}
            <PanelBar className="sidebar-panelbar">
                <PanelBarItem expanded={true} title={<><SvgIcon icon={homeIcon} /> Home</>}>
                    <NavLink to="/dashboard" className="sidebar-link">Go to Dashboard</NavLink>
                </PanelBarItem>
                <PanelBarItem title={<><SvgIcon icon={userIcon} /> Team Members</>}>
                    <NavLink to="/dashboard/team" className="sidebar-link">Team Overview</NavLink>
                </PanelBarItem>
                <PanelBarItem title={<><SvgIcon icon={calendarIcon} /> Meeting Planner</>}>
                    <NavLink to="/dashboard/meeting-planner" className="sidebar-link">Plan a Meeting</NavLink>
                </PanelBarItem>
            </PanelBar>
        </aside>
    );
};

export default Sidebar;
