import React from 'react';
import profilePic from "../images/profilePic.jpg";


  
const ProfilePic = () => {
return (
    <div className="profilePicContainer">
        <img className="profilePic" src={profilePic}/>
    </div>
    );
}

export default ProfilePic;