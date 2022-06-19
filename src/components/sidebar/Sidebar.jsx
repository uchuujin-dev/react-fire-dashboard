import React from "react";
import "./sidebar.scss";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsEthernetRoundedIcon from "@mui/icons-material/SettingsEthernetRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FIRE</span>
        </Link>
      </div>
      <hr />
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardRoundedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">APPS</p>
          <Link to="/calculator" style={{ textDecoration: "none" }}>
            <li>
              <CalculateRoundedIcon className="icon" />
              <span>Calculator</span>
            </li>
          </Link>
          <Link to="/simulator" style={{ textDecoration: "none" }}>
            <li>
              <SettingsEthernetRoundedIcon className="icon" />
              <span>Simulator</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleRoundedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsRoundedIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="bottom">
        <div className="colourMode">
          <div
            className="colourOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
          <div
            className="colourOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
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
