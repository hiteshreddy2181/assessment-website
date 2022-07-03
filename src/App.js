import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamScreen from './components/pages/ExamScreen';
import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import StudentProfile from './components/pages/StudentProfile';
import Create from './components/pages/Create';
import AdminLogin from './components/AdminLogin';
import AdminLanding from './components/AdminLanding';
import ContactUs from './components/pages/ContactUs';
import DashBoard from './components/pages/Dashboard';

function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/home'
        element = { < Home / > } > < /Route> <
        Route path = '/studentProfile'
        element = { < StudentProfile / > } > < /Route> <
        Route path = '/examScreen'
        element = { < ExamScreen / > } > < /Route> <
        Route path = '/create'
        element = { < Create / > } > < /Route> <
        Route path = '/landingpage'
        element = { < LandingPage / > } > < /Route>   <
        Route path = '/adminlogin'
        element = { < AdminLogin / > } > < /Route>  <
        Route path = '/adminlanding'
        element = { < AdminLanding / > } > < /Route>   <
        Route path = '/contactus'
        element = { < ContactUs / > } > < /Route> <
        Route path = '/dashboard'
        element = { < DashBoard / > } > < /Route>   <
        /Routes> <
        /BrowserRouter> <
        />
    );
}

export default App;