import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#222",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>Insyd</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>
        <Link to="/notifications" style={{ color: "white", textDecoration: "none" }}>
          Notifications
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
