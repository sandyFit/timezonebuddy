import React from "react";
import PieChart from "../components/charts/PieChart";
import teamData from "../data/team"; // Ensure this import is correct
import meetingsData from "../data/meetings";
import UpcomingMeetings from "../components/UpcomingMeetings";
import QuickActions from "../components/ui/QuickActions";
import Timezones from "../components/Timezones";

const Home = () => {
    const currentUser = teamData.find(user => user.id === 1) || null;

    console.log("teamData in Home:", teamData);
    console.log("Current User in Home:", currentUser);

    const getFilteredMeetings = () => {
        return meetingsData.filter(meeting => new Date(meeting.date) >= new Date());
    };

    return (
        <main className="home-container">
            <aside className="welcome-section">
                <h3>Welcome {currentUser?.name || "User"}!</h3>
                <div className="quick-actions">
                    <QuickActions currentUser={currentUser} />
                </div>
            </aside>

            <div className="timezones-section">
                <Timezones />
            </div>

            <section className="row">
                <div className="meetings-section">
                    <UpcomingMeetings
                        getFilteredMeetings={getFilteredMeetings}
                        teamData={teamData}
                        meetings={meetingsData}
                    />
                </div>
                <div className="chart-card">
                    <PieChart />
                </div>
            </section>
        </main>
    );
};


export default Home;
