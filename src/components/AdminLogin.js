// import React from "react";
// import "./pages/LandingPage";
// import "../components/pages/Home";
// import {Link } from "react-router-dom";

// function LoginSection() {
//     return (
//         <div className="login-main">
//             <div className="login-container">
//                 <h2>Login</h2>
//                 <hr/>
//                 <input type="text" placeholder="Roll Number"/>
//                 <input type="password" placeholder="Password" />
//                 <Link to="/home">
//                     <button>submit</button>
//                 </Link>
//                 <Link to="/Landingpage">
//                     <button>Login as Admin</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default LoginSection;


import React from "react";
import "./css/LoginSection.css";
import "./pages/LandingPage";
import "../components/pages/Home";
import { Link } from "react-router-dom";

function AdminLogin() {
    return ( <
        div className = "login-main" >
        <
        div className = "login-container" >
        <
        h2 > Admin Login < /h2> <
        hr / >
        <
        input type = "text"
        placeholder = "Roll Number" / >
        <
        input type = "password"
        placeholder = "Password" / >
        <
        Link to = "/home" >
        <
        button > submit < /button> <
        /Link> <
        Link to = "/Landingpage" >
        <
        button > Login as Student < /button> <
        /Link> <
        /div> <
        /div>
    );
}

export default AdminLogin;