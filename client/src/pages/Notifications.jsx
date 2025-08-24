import React from "react"

const Notifications = () => {
  // Dummy data for now – later you can fetch real notifications
  const notifications = [
    { id: 1, message: "John Doe started following you.", time: "2m ago" },
    { id: 2, message: "Your post received 5 new likes.", time: "10m ago" },
    { id: 3, message: "Anna commented on your article.", time: "30m ago" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6"
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", // pushes content to center of viewport
        textAlign: "center",
      }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <span role="img" aria-label="bell" className="mr-2">
          🔔
        </span>
        Notifications
      </h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">You don’t have any notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="p-4 bg-white shadow rounded-lg hover:bg-gray-100 transition"
            >
              <p className="text-gray-700">{note.message}</p>
              <span className="text-sm text-gray-500">{note.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Notifications
