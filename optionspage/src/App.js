import React, { useState } from "react";
import Navbar from "./Navbar";

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="container">
      <h1>Banking Services</h1>
      <div className="button-container">
        <button className="option-button">Transaction</button>
        <button className="option-button">Transaction History</button>
        <button className="option-button">Balance Enquiry</button>
        <button className="option-button">Account Creation</button>
      </div>
    </div>
    </div>
    
  );
}

export default App;
