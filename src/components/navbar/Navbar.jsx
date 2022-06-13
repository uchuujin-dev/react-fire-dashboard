import React from "react";
import "./navbar.scss";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FormatListBulletedRoundedIcon className="icon" />
          </div>
          <div className="item">
            <AccountCircleRoundedIcon className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
