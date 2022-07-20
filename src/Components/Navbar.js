import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import "../firebase";

const Navbar = (props) => {
  const location = useLocation();
  const handleLogout = (e) => {
    props.setDisplayName(null);
    localStorage.removeItem("sqeak_displayName");
  };
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

      <div className="userName" onClick={handleLogout}>
        {localStorage.getItem("sqeak_displayName")}
        <span class="tooltiptext">Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
