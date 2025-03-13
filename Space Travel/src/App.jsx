import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <><Router>
      <Navbar />
    </Router><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes></>
  );
}

export default App
