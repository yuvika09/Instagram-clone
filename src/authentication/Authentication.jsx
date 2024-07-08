import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("signup");

  const handleClick = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authentication">
      <div className="left_auth">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="right_auth">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth_more">
          {active === "login" ? (
            <span>
              Don't have an account?
              <button onClick={handleClick}>Signup</button>
            </span>
          ) : (
            <span>
              Already have an account?
              <button onClick={handleClick}>Log in</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
