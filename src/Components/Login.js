import React from "react";
import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../firebase";
const Login = (props) => {
  const provider = new GoogleAuthProvider();
  const handleLogin = (e) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        props.setDisplayName(user.displayName);
        localStorage.setItem("sqeak_displayName", user.displayName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, " : ", errorMessage);
      });
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
