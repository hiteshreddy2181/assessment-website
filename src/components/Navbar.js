import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( <
        >
        <
        nav className = 'navbar' >
        <
        Link className = 'nav-item'
        to = '/home' >
        <
        h4 >
        Home <
        /h4> <
        /Link> <
        Link className = 'nav-item'
        to = '/examScreen' >
        <
        h4 >
        Exams <
        /h4> <
        /Link> <
        Link className = 'nav-item'
        to = '/contactus' >
        <
        h4 >
        ContactUs <
        /h4> <
        /Link> <
        Link className = 'nav-item'
        to = '/dashboard' >
        <
        h4 >
        DashBoard <
        /h4> <
        /Link> <
        div className = "nav-filler" > < /div> <
        Link className = "nav-item"
        to = "/landingpage" >
        <
        h4 >
        Logout <
        /h4> <
        /Link> <
        /nav> <
        />
    );
}

export default Navbar;