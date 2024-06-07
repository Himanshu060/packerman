import "../styles/log.css"; // Import the CSS file for styling
import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage"; // Import your LoadingPage component

function LogPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("https://packerman-backend.onrender.com/getlog", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // Sort logs by createdAt timestamp in decreasing order
        const sortedLogs = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLogs(sortedLogs);
      });
  }, []);

  return (
    <div className="log-container">
      <h1>History</h1>
      {logs.length === 0 ? (
        <LoadingPage />
      ) : (
        <table className="log-table">
          <thead>
            <tr>
              <th>Container ID</th>
              <th>Boxes</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log._id}>
                <td>
                  <strong>ID : </strong> {log.containerId}
                  <br />
                  <strong>Time : </strong>{" "}
                  {new Date(log.createdAt).toLocaleString()}{" "}
                  {/* Format the timestamp */}
                </td>
                <td>
                  <ul>
                    {log.boxes.map((box) => (
                      <li key={box._id}>
                        <strong>Box ID:</strong> {box._id}
                        <br />
                        <strong>Price:</strong> {box.price}
                        <br />
                        <strong>Weight:</strong> {box.weight}
                        <br />
                        <strong>Volume:</strong> {box.volume}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LogPage;
