import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
        maxHeight: "300px",
        overflowY: "auto",
      }}
    >
      {notifications.length === 0 ? (
        <p>No notifications yet...</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {notifications.map((n, index) => (
            <li
              key={index}
              style={{
                background: "#f9f9f9",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              {n.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
