import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      {location.pathname === "/write" ? (
        <Link
          style={{
            color: "gray",
            textDecoration: "none",
          }}
          to="/"
        >
          <div className="write">Read</div>
        </Link>
      ) : (
        <Link
          style={{
            color: "gray",
            textDecoration: "none",
          }}
          to="/write"
        >
          <div className="write">Write</div>
        </Link>
      )}

      <Link
        style={{
          color: "black",
          textDecoration: "none",
        }}
        to="/"
      >
        <div className="appName">Sqeak</div>
      </Link>

      <div className="userName">Aditya Deo</div>
    </div>
  );
};

export default Navbar;
