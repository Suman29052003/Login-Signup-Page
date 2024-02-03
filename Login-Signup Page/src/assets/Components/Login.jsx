import React from "react";
import "./Login.css";
import userIcon from "../Icons/userIcon.svg";
import emailIcon from "../Icons/emailIcon.svg";
import passwordIcon from "../Icons/passwordIcon.svg";

const Login = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          SignUp
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input name">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input mail">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input password">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgotPassword">
          Forgot Password? <span>Click Me!</span>
        </div>
        <div className="buttons">
          <div className="signup button">Sign Up</div>
          <div className="logIn button">Log In</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
