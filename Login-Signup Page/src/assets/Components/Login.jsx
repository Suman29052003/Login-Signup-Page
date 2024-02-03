import React, { useState } from "react";
import "./Login.css";
import userIcon from "../Icons/userIcon.svg";
import emailIcon from "../Icons/emailIcon.svg";
import passwordIcon from "../Icons/passwordIcon.svg";

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          {action}
          <div className="underline"></div>
        </div>
        <div className="inputs">
        {action === "Log In" ? (
          <div></div>
        ) : (
            <div className="input name">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
          <div className="input mail">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input password">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgotPassword">
            Forgot Password? <span>Click Me!</span>
          </div>
        )}
        <div className="buttons">
          <div className="signup button" onClick={() => setAction("Sign Up")}>
            Sign Up
          </div>
          <div className="logIn button" onClick={() => setAction("Log In")}>
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
