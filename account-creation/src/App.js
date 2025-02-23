import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Acc from "./Acc";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      < div className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      < Acc/>
    </div>
  );
}

export default App;
