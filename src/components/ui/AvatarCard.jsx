import React from 'react';

const AvatarCard = ({ employee, images, jobTitle }) => {
    return (
        <div className="avatar-card">
            <img src={images} alt={employee.name} className="avatar-img" />
            <div className="avatar-info">
                <h4>{employee.name}</h4>
                <p>{jobTitle}</p>
            </div>
        </div>
    );
};

export default AvatarCard;
