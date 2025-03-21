import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Timezones from './pages/Timezones';
import MeetingPlanner from './pages/MeetingPlanner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="timezones" element={<Timezones />} />
          <Route path="meeting-planner" element={<MeetingPlanner />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
