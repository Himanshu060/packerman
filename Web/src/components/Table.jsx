import React, { useState } from "react";
import Popup from "./Popup"; // Import the Popup component
import "../styles/table.css";

const Table = ({ data, deleteData }) => {
  const [selectedId, setSelectedId] = useState(null); // State to store the selected _id

  // Function to open the popup when a row is clicked
  const handleRowClick = (id) => {
    setSelectedId(id);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedId(null);
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Volume</th>
            <th>Action</th> {/* Add a new column for delete buttons */}
          </tr>
        </thead>
        <tbody>
          {data.map((it, index) => (
            <tr key={it._id} onClick={() => handleRowClick(it._id)}>
              <td>{index + 1}</td>
              <td>{it.price}</td>
              <td>{it.weight}</td>
              <td>{it.volume}</td>
              <td>
                <button className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event from firing
                    deleteData(it._id); // Call the deleteData function with the _id to delete
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the Popup component with selectedId */}
      {selectedId && <Popup id={selectedId} onClose={handleClosePopup} />}
    </div>
  );
};

export default Table;
