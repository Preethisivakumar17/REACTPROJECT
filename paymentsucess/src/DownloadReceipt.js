import React from "react";
import "./App.css";

function App() {
  const DownloadReceipt = () => {
    const element = document.createElement("a");
    const file = new Blob(["Payment Receipt"], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "receipt.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      <div className="success-icon">✔</div>
      <h2>Payment Successful</h2>
      <p>You can Download your receipt!</p>
      <button className="download-button" onClick={DownloadReceipt}>
        Download Receipt
      </button>
    </div>
  );
}

export default App;
