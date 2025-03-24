import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardBody, CardTitle, CardSubtitle } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";
import { Reveal } from '@progress/kendo-react-animation';

const LandingPage = () => {

    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/dashboard');

    }
    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="navbar-container">
                    <img src='/img/buddy-logo.png' alt='Buddy Logo' className='logo' />
                </div>
            </nav>
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Timezone Buddy</h1>
                    <p>Join meetings seamlessly based on your team's availability across timezones!</p>
                    <Reveal>
                        <Button
                            primary={true}
                            onClick={handleLearnMoreClick}>
                            Kickstart Your First Meeting!
                        </Button>
                    </Reveal>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="features">
                <h2>Main Features</h2>
                <div className="features-list">
                    <Card style={{ width: "300px" }}>
                        <CardBody>
                            <CardTitle>Join Meetings on Your Time</CardTitle>
                            <CardSubtitle>Timezone Buddy ensures meetings are scheduled within your working hours.</CardSubtitle>
                        </CardBody>
                    </Card>

                    <Card style={{ width: "300px" }}>
                        <CardBody>
                            <CardTitle>Check Team Availability</CardTitle>
                            <CardSubtitle>See your team's availability in real time and schedule meetings more efficiently.</CardSubtitle>
                        </CardBody>
                    </Card>

                    <Card style={{ width: "300px" }}>
                        <CardBody>
                            <CardTitle>AI-Powered Scheduling</CardTitle>
                            <CardSubtitle>Let our fun AI mock suggest optimal meeting times for you and your team!</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </section>

            

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Timezone Buddy. </p>
                <p>KendoReact Free Components Challenge</p>
                <p><a href="https://www.linkedin.com/in/dev-trishramos/">by Trish Ramos</a></p>
            </footer>
        </div>
    );
};

export default LandingPage;

