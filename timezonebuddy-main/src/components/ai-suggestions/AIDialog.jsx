import React, { useState, useEffect } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import FindOptimalTimes from "../ai-suggestions/FindOptimalTimes";
import aiGreetings from "../../data/aiGreetings";

const AIDialog = ({ showAvailabilityDialog, setShowAvailabilityDialog, currentUser }) => {
    const [randomGreeting, setRandomGreeting] = useState("");

    const getRandomGreeting = () => {
        let newGreeting;
        do {
            newGreeting = aiGreetings[Math.floor(Math.random() * aiGreetings.length)];
        } while (newGreeting === randomGreeting);
        setRandomGreeting(newGreeting);
    };

    useEffect(() => {
        if (showAvailabilityDialog) {
            getRandomGreeting();
        }
    }, [showAvailabilityDialog]);

    return (
        <>
            {showAvailabilityDialog && (
                <Dialog
                    onClose={() => setShowAvailabilityDialog(false)}
                    title="AI-Powered Meeting Time Suggestions 🤖"
                    width={500}
                    className="ai-dialog-container"
                >
                    <p>{randomGreeting}</p>
                    <div className="dialog-content">
                        <FindOptimalTimes currentUser={currentUser} />
                    </div>

                    <div className="dialog-footer">
                        <Button onClick={getRandomGreeting} className="new-greeting-btn">New Greeting</Button>
                        <Button onClick={() => setShowAvailabilityDialog(false)} className="close-btn">Close</Button>
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default AIDialog;
