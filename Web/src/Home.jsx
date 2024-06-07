import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-mini-container">
          <div className="home-header">
            <h1>PACKERMAN</h1>
            <p>Cargo optimization redefined</p>
            <div className="home-btn">
          <button className="cta-btn" onClick={()=>{
            window.location.href="/app"
          }}>Initialize PackerMan...</button>
        </div>
          </div>
          <div className="home-use">
            <h2>Get Started with PackerMan</h2>
            <ul>
              <li>Select ADD Button </li>
              <li>Enter cargo parameters</li>
              <li>Select one of the 3 schemes to optimise from</li>
              <li>Ship the container</li>
              <li>View history</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
