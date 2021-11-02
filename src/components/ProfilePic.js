import React from 'react';
import profilePic from "../images/profilePic.jpg";


  
const ProfilePic = () => {
return (
    <div className="profilePicContainer">
        <img className="profilePic" src={profilePic} alt="e"/>
    </div>
    );
}

export default ProfilePic;