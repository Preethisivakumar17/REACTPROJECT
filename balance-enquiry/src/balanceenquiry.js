import React, { useState } from "react";

const BalanceEnquiry = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [mpin, setMpin] = useState("");

  const handleCheckBalance = () => {
    alert("Balance Check Initiated!");
  };

  return (
    <div className="balance-container">
      <h2>Balance Enquiry</h2>
      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <input
        type="password"
        placeholder="MPIN"
        value={mpin}
        onChange={(e) => setMpin(e.target.value)}
      />
      <button onClick={handleCheckBalance}>Check Balance</button>
    </div>
  );
};

export default BalanceEnquiry;

