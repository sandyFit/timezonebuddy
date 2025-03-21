import React from 'react'
import Sidebar from '../layout/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Dashboard = () => {
    return (
        <section className='w-full h-[calc(100vh-4rem)] flex flex-col'>
            <Navbar />
            <div className="w-full h-full grid grid-cols-8">
                <div className="flex col-span-1 col-start-1">
                    <Sidebar />
                </div>
                <section className="col-span-7 col-start-2">
                    <Outlet />
                </section>
            </div>
        </section>
    )
}

export default Dashboard;

