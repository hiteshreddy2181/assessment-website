import React from "react";
import Banner from "../Banner";
import LoginSection from "../LoginSection";

function LandingPage() {
    return (
        <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%", backgroundImage: "url('/images/splash.png')"}}>
            <Banner />
            <LoginSection />
        </div>
    );
}

export default LandingPage;