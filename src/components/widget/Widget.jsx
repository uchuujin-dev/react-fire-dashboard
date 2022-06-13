import React from "react";
import "./widget.scss";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "fire":
      data = {
        title: "YEARS TO FIRE",
        link: "Calculate",
        icon: <LocalFireDepartmentRoundedIcon className="icon" />
      };
      break;
    case "pots":
      data = {
        title: "POTS",
        link: "Edit",
        icon: <AttachMoneyRoundedIcon className="icon" />
      };
      break;
    case "worth":
      data = {
        title: "NET WORTH",
        link: "Edit",
        icon: <AutoGraphRoundedIcon className="icon" />
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">Some prop text</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
