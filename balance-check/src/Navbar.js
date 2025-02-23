import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Chennai Overseas Bank</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <button className="logout">Logout</button>
    </nav>
  );
};

export default Navbar;