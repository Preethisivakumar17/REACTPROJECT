import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <button>Account Creation</button>
      <button>Balance Enquiry</button>
      <button>Transaction History</button>
      <button>Transaction</button>
    </div>
  );
};

export default Sidebar;