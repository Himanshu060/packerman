// Popup.js

import React from "react";
import "../styles/popup.css"; // Create a CSS file for styling the popup

const Popup = ({ id, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Box Id</h2>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Popup;
