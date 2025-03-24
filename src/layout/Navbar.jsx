import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import UserTimeZone from '../components/UserTimezone';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { bellIcon } from '@progress/kendo-svg-icons';
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";

const Navbar = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    // Function to show notification
    const handleShowNotification = () => {
        // Custom message for the notification
        setNotificationMessage('You have 2 new notifications');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);  // Hide after 3 seconds
    };

    // Function to handle logo click and navigate to landing
    const handleLogoClick = () => {
        navigate('/');  // Navigate to the landing page
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img
                    src='/img/buddy-logo.png'
                    alt='Buddy Logo'
                    className='logo'
                    onClick={handleLogoClick}  // Add onClick handler for logo
                    style={{ cursor: 'pointer' }}  // Add pointer cursor for better UX
                />
                <div className="notification-container">
                    <div className="">
                        {/* Notification Bell Icon */}
                        <BadgeContainer>
                            <SvgIcon
                                icon={bellIcon}
                                size={'large'}
                                onClick={handleShowNotification}
                                style={{ cursor: 'pointer' }}
                            />

                            <Badge themeColor="warning" />
                        </BadgeContainer>

                        {/* Notification Group */}
                        <NotificationGroup
                            style={{ position: "absolute", top: "60px", right: "10px", maxWidth: "300px", zIndex: 1000 }}
                        >
                            {showNotification && (
                                <Notification
                                    type={{ style: "success", icon: true }}
                                    style={{ width: "100%", maxWidth: "300px" }}
                                >
                                    {notificationMessage}
                                </Notification>
                            )}
                        </NotificationGroup>
                    </div>
                    <UserTimeZone />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
