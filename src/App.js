import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamScreen from './components/pages/ExamScreen';
//import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import StudentProfile from './components/pages/StudentProfile';
import Create from './components/pages/Create';

function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/studentProfile' element={<StudentProfile />} ></Route>
          <Route path='/examScreen' element={<ExamScreen />} ></Route>
          <Route path='/create' element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;