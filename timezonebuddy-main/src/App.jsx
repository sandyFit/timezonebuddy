// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero'; 
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MeetingPlanner from './pages/MeetingPlanner';
import TeamMembers from './pages/TeamMembers';

const App = () => {
    return (
        <Routes>
            {/* Landing page at root */}
            <Route path="/" element={
                <main>
                    <Hero />
                </main>
            } />

            {/* Dashboard and its routes */}
            <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Home />} />
                <Route path="meeting-planner" element={<MeetingPlanner />} />
                <Route path="team" element={<TeamMembers />} />
            </Route>
        </Routes>
    );
};

export default App;
