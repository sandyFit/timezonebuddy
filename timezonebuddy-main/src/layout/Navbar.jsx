import React, { useState } from 'react';
import UserTimeZone from '../components/UserTimezone';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { bellIcon } from '@progress/kendo-svg-icons';
import { Notification, NotificationGroup } from "@progress/kendo-react-notification";

const Navbar = () => {
    const [showNotification, setShowNotification] = React.useState(false);

    const handleshowNotification = () => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src='/img/buddy-logo.png' alt='Buddy Logo' className='logo' />
                <div className="language-switcher">
                    <div className="flex">

                        <BadgeContainer>
                            <SvgIcon icon={bellIcon} size={'large'} />
                            <Badge themeColor="warning" />
                        </BadgeContainer>
                        {/* Reminder Notification */}
                        <NotificationGroup style={{ position: "absolute", top: "60px", right: "10px", maxWidth: "300px", zIndex: 1000 }}>
                            {showNotification && (
                                <Notification type={{ style: "success", icon: true }} style={{ width: "100%", maxWidth: "300px" }}>
                                    You have 2 notifications
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



