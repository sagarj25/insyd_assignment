import React from "react"

const Profile = () => {
  // Dummy user data (replace with API later)
  const user = {
    name: "X Y Z",
    email: "xyz@example.com",
    role: "Full Stack Developer",
    joined: "March 2024",
    avatar: "https://ui-avatars.com/api/?name=S+J&background=0D8ABC&color=fff", // auto avatar
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center"
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", // pushes content to center of viewport
        textAlign: "center",
      }}>
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user.name}
          </h2>
          <p className="text-gray-500">{user.role}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Joined:</span>
            <span className="text-gray-800">{user.joined}</span>
          </div>
        </div>

       
        
      </div>
    </div>
  )
}

export default Profile
