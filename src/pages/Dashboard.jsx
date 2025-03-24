import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Sidepanel from '../layout/Sidepanel';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard-sidebar">
                    <Sidepanel />
                </div>
                <section className="dashboard-content">
                    <Outlet />
                </section>
            </div>
        </section>
    );
};

export default Dashboard;
