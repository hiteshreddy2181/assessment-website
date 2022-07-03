import React from "react";
import "./css/ProfileContainer.css";

function ProfileContainer() {
    return (
        <div className="profile-main">
            <div className="profile-sections">
                <div className="profile-section">
                    <h1>Upcoming tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                        <span style={{minWidth: '25%'}}>There's nothing here.</span>
                    </div>
                </div>
                <div className="profile-section">
                    <h1>Upcoming tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        <span>There's nothing here.</span>
                    </div>
                </div>
                <div className="profile-section">
                    <h1>Upcoming tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        <span>There's nothing here.</span>
                    </div>
                </div>
                <div className="profile-section">
                    <h1>Upcoming tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        <span>There's nothing here.</span>
                    </div>
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-icon">
                    <img src="./images/default-profile.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProfileContainer;