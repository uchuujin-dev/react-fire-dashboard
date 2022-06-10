import React from "react";
import "./sidebar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FIRE</span>
      </div>
      <hr />
      <div className="centre">
        <ul>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <CalculateRoundedIcon className="icon" />
            <span>Calculator</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colourMode">
          <div className="colourOption"></div>
          <div className="colourOption"></div>
        </div>
        <div className="logout">
          <ul>
            <li>
              <ExitToAppRoundedIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
