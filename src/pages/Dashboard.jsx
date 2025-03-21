import React from 'react'
import Sidebar from '../layout/Sidebar';
import Home from './Home';

const Dashboard = () => {
    return (
        <section className='w-full h-[calc(100vh-4rem)] flex justify-center items-center'>
            <div className="w-full h-full grid grid-cols-12">
                <div className="flex col-span-2 col-start-1">
                    <Sidebar />
                </div>
                <section className="col-span-9 col-start-3">
                    <Home />
                </section>
            </div>
        </section>
    )
}

export default Dashboard;

