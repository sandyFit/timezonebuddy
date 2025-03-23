import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { useState } from 'react';
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import AIDialog from "../ai-suggestions/AIDialog";
import AddEventModal from "../modals/AddEventModal";
import meetings from "../../data/meetings"; 

const QuickActions = ({ teamData, currentUser }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showAISuggestions, setShowAISuggestions] = useState(false);
    const [reminderSent, setReminderSent] = useState(false);

    // Open modal to join a meeting
    const handleJoinMeeting = () => setModalOpen(true);


    const handleAISuggestions = () => {
        if (!currentUser) {
            console.error("No current user data available");
            alert("Unable to provide suggestions: User data not available");
            return;
        }
        setShowAISuggestions(true);
    };

    const handleSendReminder = () => {
        setReminderSent(true);
        setTimeout(() => setReminderSent(false), 3000);
    };

    return (
        <div className="quick-actions-container">
            <ButtonGroup>
                <Button onClick={handleJoinMeeting}>📅 Join A Meeting</Button>
                <Button onClick={handleAISuggestions}>🤖 Ask AI For Optimal Times</Button>
                <Button onClick={handleSendReminder}>📨 Send Reminder</Button>
            </ButtonGroup>

            {/* Join Meeting Modal */}
            <AddEventModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                meetings={meetings}  // Pass meetings data to the modal
                currentUser={currentUser}  // Pass current user info to handle joining
            />

            {/* AI Meeting Time Suggestions */}
            {showAISuggestions && (
                <AIDialog
                    showAvailabilityDialog={showAISuggestions}
                    setShowAvailabilityDialog={setShowAISuggestions}
                    currentUser={currentUser}
                />
            )}

            {/* Reminder Notification */}
            <NotificationGroup
                style={{
                    position: 'absolute',  
                    top: '60px',           
                    right: '10px',         
                    maxWidth: '300px',     
                    zIndex: 1000,        
                }}
            >
                {reminderSent && (
                    <Notification
                        type={{ style: 'success', icon: true }}
                        style={{
                            width: '100%',
                            maxWidth: '300px',  
                            wordWrap: 'break-word',
                            whiteSpace: 'normal',
                        }}
                    >
                        Reminder Sent Successfully! ✅
                    </Notification>
                )}
            </NotificationGroup>

        </div>
    );
};

export default QuickActions;
