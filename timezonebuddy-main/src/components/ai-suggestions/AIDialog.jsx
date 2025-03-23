import React, { useState, useEffect } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import FindOptimalTimes from "../ai-suggestions/FindOptimalTimes";
import aiGreetings from "../../data/aiGreetings";

const AIDialog = ({ showAvailabilityDialog, setShowAvailabilityDialog, currentUser }) => {
    const [randomGreeting, setRandomGreeting] = useState("");

    // Function to generate a new random greeting that is different from the previous one
    const getRandomGreeting = () => {
        let newGreeting;
        do {
            newGreeting = aiGreetings[Math.floor(Math.random() * aiGreetings.length)];
        } while (newGreeting === randomGreeting); // Ensure it's different from the last one
        setRandomGreeting(newGreeting);
    };

    // Generate a new greeting when the dialog opens
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
                >
                    <p>{randomGreeting}</p>
                    <FindOptimalTimes currentUser={currentUser} />
                    
                    <div className="dialog-footer">
                        <Button onClick={getRandomGreeting}>New Greeting</Button>
                        <Button onClick={() => setShowAvailabilityDialog(false)}>Close</Button>
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default AIDialog;
