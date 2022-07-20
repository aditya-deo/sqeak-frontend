import React from "react";
import "./Login.css";
const Login = (props) => {
  const handleLogin = (e) => {
    console.log("login button clicked");
  };
  return (
    <div className="landingPage">
      <div className="heading">
        <div className="premise">
          <span>Put your hands in the air and</span>
        </div>
        <div className="punchline">Sqeak</div>
      </div>
      <div className="loginButton">
        <button onClick={handleLogin} className="loginSubmit" type="button">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
