import React from "react";
import "./navbar.scss";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            {darkMode ? (
              <DarkModeIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            ) : (
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            )}
          </div>
          <div className="item">
            <FormatListBulletedRoundedIcon className="icon" />
          </div>

          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="item">
              <AccountCircleRoundedIcon className="avatar" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
