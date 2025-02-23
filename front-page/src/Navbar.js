import React from 'react';
import './App.css';
 
const App = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Chennai Overseas Bank
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div >
            <button className="navbar-right">LOGIN</button>
          
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>     
    );
  };

export default App;




