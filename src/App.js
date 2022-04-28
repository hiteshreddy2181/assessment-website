import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exam_Screen from './components/pages/Exam_Screen';
import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import StudentProfile from './components/pages/StudentProfile';

function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/studentProfile' element={<StudentProfile />}></Route>
          <Route path='/examScreen' element={<Exam_Screen />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;