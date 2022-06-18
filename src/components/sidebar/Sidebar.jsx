import React from "react";
import "./sidebar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsEthernetRoundedIcon from "@mui/icons-material/SettingsEthernetRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FIRE</span>
      </div>
      <hr />
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">APPS</p>
          <li>
            <CalculateRoundedIcon className="icon" />
            <span>Calculator</span>
          </li>
          <li>
            <SettingsEthernetRoundedIcon className="icon" />
            <span>Simulator</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
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
