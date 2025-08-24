import React from "react"

const Home = () => {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
    style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", // pushes content to center of viewport
        textAlign: "center",
      }}>
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Insyd </span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Stay connected, get real-time notifications, and engage with your
          network in the Architecture Industry.
        </p>
        
      </div>
    </div>
  )
}

export default Home
