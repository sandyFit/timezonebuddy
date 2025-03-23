import { Avatar } from '@progress/kendo-react-layout';
import { Badge } from '@progress/kendo-react-indicators';

const TeamStatus = ({ team = [], currentTime }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {team.map((member) => {
                const localHour = new Date(currentTime.toLocaleString('en-US', { timeZone: member.timeZone })).getHours();
                const isOnline = localHour >= member.workStart && localHour < member.workEnd;

                return (
                    <div key={member.id} className="flex items-center gap-2">
                        <Avatar shape="circle">{member.name.charAt(0)}</Avatar>
                        <span>{member.name}</span>
                        <Badge type={isOnline ? 'success' : 'error'}>{isOnline ? 'Online' : 'Offline'}</Badge>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamStatus;
