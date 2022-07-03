import React from "react";
import Banner from "./Banner";
import AdminLogin from "../components/AdminLogin";

function AdminLanding() {
    return ( <
        div style = {
            { display: "flex", flexDirection: "row", width: "100%", height: "100%", backgroundImage: "url('/images/splash.png')" } } >
        <
        Banner / >
        <
        AdminLogin / >
        <
        /div>
    );
}

export default AdminLanding;