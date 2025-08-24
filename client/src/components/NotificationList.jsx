import React from "react";

const NotificationList = ({ notifications }) => {
  return (
    <div>
      {notifications.length === 0 ? (
        <p>No notifications yet...</p>
      ) : (
        <ul>
          {notifications.map((n, index) => (
            <li key={index}>{n.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
