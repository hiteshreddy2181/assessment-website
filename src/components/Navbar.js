import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link className='nav-item' to='/home'>
          <h4>
            Home
          </h4>
        </Link>
        <Link className='nav-item' to='/examScreen'>
          <h4>
            Exam
          </h4>
        </Link>
        <div className="nav-filler"></div>
        <Link className="nav-item" to="/">
          <h4>
            Logout
          </h4>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;