import React from "react";
import "./LoginSection.css";

function LoginSection() {
    return (
        <div className="login-main">
            <div className="login-container">
                <h2>Login</h2>
                <hr/>
                <input type="text" placeholder="Roll Number"/>
                <input type="password" placeholder="Password"/>
                <input type="button" value="Submit"/>
            </div>
        </div>
    );
}

export default LoginSection;