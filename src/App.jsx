import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Assets from "./Components/Assets";
import PenetrationTestingServices from "./Components/PenetrationTestingServices";
import SchedulePentest from "./Components/SchedulePentest";
import CyberSecuritySection from "./Components/CyberSecuritySection";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is outside Routes to make it global */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Assets />
                </div>
                <div id="about-us">
                  <CyberSecuritySection />
                </div>
                <div id="services">
                  <PenetrationTestingServices />
                </div>
                <div id="contact">
                  <SchedulePentest />
                </div>
              </>
            }
          />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
