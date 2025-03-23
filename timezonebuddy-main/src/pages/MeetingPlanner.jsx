import React, { useState, useEffect } from 'react';
import { Dialog } from '@progress/kendo-react-dialogs';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import moment from 'moment-timezone';
import meetings from '../data/meetings';
import teamMembers from '../data/team';


const MeetingPlanner = () => {
    const [meetingData, setMeetingData] = useState({
        title: 'Team Sync',
        date: new Date(),
        duration: 60,
    });
    const [availabilityData, setAvailabilityData] = useState([]);
    const [conflicts, setConflicts] = useState([]);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);


    const handleScheduleMeeting = () => {
        console.log("Meeting scheduled:", meetingData);

        setShowConfirmDialog(false);
    };

    useEffect(() => {
        calculateAvailabilityAndConflicts();
    }, [meetingData.date, meetingData.duration]);

    const calculateAvailabilityAndConflicts = () => {
        const meetingStart = moment(meetingData.date);
        const meetingEnd = moment(meetingStart).add(meetingData.duration, 'minutes');

        // Find conflicts
        const conflictingMeetings = meetings.filter(
            (meeting) =>
                moment(meeting.date).isSame(meetingData.date, 'day') &&
                moment(meeting.startTime, 'HH:mm').isBefore(meetingEnd) &&
                moment(meeting.endTime, 'HH:mm').isAfter(meetingStart)
        );
        setConflicts(conflictingMeetings);

        const availability = teamMembers.map(member => {
            const memberMeetingStart = meetingStart.clone().tz(member.timeZone);
            const memberMeetingEnd = meetingEnd.clone().tz(member.timeZone);
            const workStart = memberMeetingStart.clone().hour(member.workStart).minute(0);
            const workEnd = memberMeetingStart.clone().hour(member.workEnd).minute(0);

            const isAvailable = memberMeetingStart.isBetween(workStart, workEnd, null, '[)') &&
                memberMeetingEnd.isBetween(workStart, workEnd, null, '[)');

            return {
                ...member,
                status: isAvailable ? 'Available' : 'Unavailable',
                localTime: memberMeetingStart.format('h:mm A'),
                localDate: memberMeetingStart.format('MMM D'),
            };
        });

        setAvailabilityData(availability);
    };

    return (
        <section className='schedule-container'>            
            <div className="schedule-meeting-container">
               
                <h3>Schedule a Meeting</h3>

                <label>Pick your Date & Time</label>
                <DateTimePicker
                    value={meetingData.date}
                    onChange={(e) => setMeetingData({ ...meetingData, date: e.value })}
                    style={{ width: '100%' }}
                />

                {conflicts.length > 0 && (
                    <div>
                        <h4>Conflicts</h4>
                        {conflicts.map((conflict, index) => (
                            <p key={index}>{conflict.title} ({conflict.startTime} - {conflict.endTime})</p>
                        ))}
                    </div>
                )}

                <h4>Check Your Team Availability</h4>
                <Grid data={availabilityData} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <GridColumn field="name" title="Team Member" />
                    <GridColumn field="localTime" title="Local Time" />
                    <GridColumn
                        field="status"
                        title="Availability"
                        cell={(props) => (
                            <td>
                                {props.dataItem.status === 'Available' ?
                                    <span style={{
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        display: 'inline-block'
                                    }}>
                                        Available
                                    </span> :
                                    <span style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        display: 'inline-block'
                                    }}>
                                        Unavailable
                                    </span>
                                }
                            </td>
                        )}
                    />
                </Grid>

                <Button
                    themeColor="primary"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setShowConfirmDialog(true)}
                >
                    Schedule Meeting
                </Button>

                {showConfirmDialog && (
                    <Dialog title="Confirm Meeting" onClose={() => setShowConfirmDialog(false)}>
                        <div style={{ padding: '10px 20px' }}>
                            <p>Are you sure you want to schedule the following meeting?</p>
                            <p><strong>Title:</strong> {meetingData.title}</p>
                            <p><strong>Date & Time:</strong> {moment(meetingData.date).format('MMMM D, YYYY h:mm A')}</p>
                            <p><strong>Duration:</strong> {meetingData.duration} minutes</p>

                            {conflicts.length > 0 && (
                                <div style={{ color: 'red', marginTop: '10px' }}>
                                    <p><strong>Warning:</strong> This meeting has {conflicts.length} conflict(s)</p>
                                </div>
                            )}

                            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                <Button onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
                                <Button themeColor="primary" onClick={handleScheduleMeeting}>Confirm Schedule</Button>
                            </div>
                        </div>
                    </Dialog>
                )}
            </div>
        </section>
    );
};

export default MeetingPlanner;
