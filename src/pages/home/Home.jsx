import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

const Home = () => {
  const [widgetText, setWidgetText] = useState([
    {
      id: "fire",
      title: "YEARS TO FIRE",
      text: [{ id: "fire", title: "?", content: "" }],
      link: "Calculate",
      icon: <LocalFireDepartmentRoundedIcon className="icon" />
    },
    {
      id: "pots",
      title: "POTS",
      text: [
        { id: "emergency", title: "Emergency fund", content: ": ?" },
        { id: "cash", title: "Other cash", content: ": ?" }
      ],

      link: "Click to edit",
      icon: <AttachMoneyRoundedIcon className="icon" />
    },
    {
      id: "worth",
      title: "NET WORTH",
      text: [
        { id: "assets", title: "Assets", content: ": ?" },
        { id: "liabilities", title: "Liabilities", content: ": ?" }
      ],
      total: "?",
      link: "Click to edit",
      icon: <AutoGraphRoundedIcon className="icon" />
    }
  ]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgetText.map((widget) => {
            return <Widget widget={widget} />;
          })}
        </div>
        <div className="charts"></div>
      </div>
    </div>
  );
};

export default Home;
