import React, { useState } from 'react';
import '../Style/Style.css';
import logo from '../IMG/c0c589de013e8edd08676bebdb10f698.png';

function Navbar() {
  const [activeTab, setActiveTab] = useState("Services");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={logo} alt="Agency Logo" />
          <span>Agency</span>
        </div>

        <ul className="navbar-links">
          {["Services", "Our Values", "Case Studies", "Blog", "Inner Pages"].map((tab, index) => (
            <li
              key={index}
              className={activeTab === tab ? "active" : ""}
              onClick={() => handleTabClick(tab)}
            >
              {tab === "Case Studies" ? (
                <a href="#CaseStudies">{tab}</a>
              ) : tab === "Blog" ? (
                <a href="#Testimonials">{tab}</a>
              ) : tab === "Our Values" ? (
                <a href="#Services">{tab}</a>
              ) : tab === "Inner Pages" ? (
                <a href="#Services">{tab}</a>
              )
                : (
                  tab
                )}
            </li>
          ))}
        </ul>

        <div className="navbar-buttons">
          <button className="login-button btn btn-outline-primary">LOGIN</button>
          <button className="register-button">REGISTER</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
