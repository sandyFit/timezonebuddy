import React, { useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const AddEventModal = ({ isOpen, onClose, meetings, currentUser, onUpdateMeetings }) => {
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState(null); // State for confirmation message

    const handleJoinMeeting = () => {
        if (selectedMeeting) {
            const updatedMeeting = {
                ...selectedMeeting,
                attendees: [...selectedMeeting.attendees, currentUser.id],
            };
            // Update the meetings list with the modified meeting
            onUpdateMeetings(updatedMeeting);
            setConfirmationMessage(`You have successfully joined the meeting: ${selectedMeeting.title}`); // Set confirmation message
        }
    };

    return (
        isOpen && (
            <Dialog onClose={onClose} title="Join A Meeting">
                <div className="meeting-container">
                    <DropDownList
                        data={meetings}
                        textField="title"
                        dataItemKey="id"
                        value={selectedMeeting || null}
                        onChange={(e) => setSelectedMeeting(e.value)}
                        placeholder="Select a meeting to join"
                    />

                    {selectedMeeting && (
                        <div className="meeting-details">
                            🗓 Date: <strong>{selectedMeeting.date}</strong>
                            <br />
                            🕒 Time: <strong>{selectedMeeting.startTime} - {selectedMeeting.endTime}</strong>
                            <br />
                            Attendees: <strong>{selectedMeeting.attendees.length}</strong>
                        </div>
                    )}

                    {/* Display confirmation message */}
                    {confirmationMessage && (
                        <div className="confirmation-message" style={{ marginTop: "1rem", color: "green" }}>
                            {confirmationMessage}
                        </div>
                    )}

                    <div className="modal-actions">
                        <Button themeColor="light" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button themeColor="primary" onClick={handleJoinMeeting}>
                            Join Meeting
                        </Button>
                    </div>
                </div>
            </Dialog>
        )
    );
};

export default AddEventModal;

