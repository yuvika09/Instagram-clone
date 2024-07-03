import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css"

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions_title">Suggestions for you</div>

      <div className="suggestions_users">
      
        <div className="suggestions_username">
          <span className="avatar">
            <Avatar>Y</Avatar>
          </span>
          <div className="username_info">
            <div className="username">yuvi09</div>
            <div className="relation">New to Instagram</div>
          </div>
        </div>

        <button className="suggestions_followbtn">Follow</button>

      </div>


      <div className="suggestions_users">
        <div className="suggestions_username">
          <span className="avatar">
            <Avatar>Y</Avatar>
          </span>
          <div className="username_info">
            <div className="username">yuvi09</div>
            <div className="relation">New to Instagram</div>
          </div>
        </div>
        <button className="suggestions_followbtn">Follow</button>
      </div>


      <div className="suggestions_users">
        <div className="suggestions_username">
          <span className="avatar">
            <Avatar>Y</Avatar>
          </span>
          <div className="username_info">
            <div className="username">yuvi09</div>
            <div className="relation">New to Instagram</div>
          </div>
        </div>
        <button className="suggestions_followbtn">Follow</button>
      </div>


    </div>
  );
}

export default Suggestions;
