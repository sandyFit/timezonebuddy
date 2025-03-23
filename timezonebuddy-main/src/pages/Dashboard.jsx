import React from 'react';
import Sidebar from '../layout/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';


const Dashboard = () => {
    return (
        <section className="dashboard">
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard-sidebar">
                    <Sidebar />
                </div>
                <section className="dashboard-content">
                    <Outlet />
                </section>
            </div>
        </section>
    );
};

export default Dashboard;
