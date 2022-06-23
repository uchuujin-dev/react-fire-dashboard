import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import FireGraph from "../../components/fireGraph/FireGraph";
import MarketGraph from "../../components/marketGraph/MarketGraph";
import "./home.scss";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

const Home = () => {
  const [widgetText, setWidgetText] = useState([
    {
      id: "fire",
      position: 1,
      title: "YEARS TO FIRE",
      text: [{ id: "fire", title: "", content: "?", contentDecor: "" }],
      link: "Calculate",
      icon: <LocalFireDepartmentRoundedIcon className="icon crimson" />
    },
    {
      id: "pots",
      position: 2,
      title: "POTS",
      text: [
        {
          id: "emergency",
          title: "Emergency fund: ",
          content: "?",
          contentDecor: " £ "
        },
        { id: "cash", title: "Other cash: ", content: "?", contentDecor: " £ " }
      ],

      link: "Click to edit",
      icon: <AttachMoneyRoundedIcon className="icon green" />
    },
    {
      id: "worth",
      position: 3,
      title: "NET WORTH",
      text: [
        { id: "assets", title: "Assets: ", content: "?", contentDecor: "£ " },
        {
          id: "liabilities",
          title: "Liabilities: ",
          content: "?",
          contentDecor: " £ "
        }
      ],
      total: "?",
      link: "Click to edit",
      icon: <AutoGraphRoundedIcon className="icon purple" />
    }
  ]);
  function sortByPosition(a, b) {
    if (b.position) {
      return a.position > b.position ? 1 : a.position < b.position ? -1 : 0;
    } else {
      return 0;
    }
  }

  function saveWidgetText(widgetId, newText) {
    setWidgetText((prev) => {
      let newWidgetTextObj = prev.find((e) => e.id === widgetId);
      let oldObjArr = prev.filter((obj) => obj !== newWidgetTextObj);

      const newTextKeys = Object.keys(newText);

      const textArr = newWidgetTextObj.text.map((text) => {
        const key = newTextKeys.find((key) => key === text.id);
        if (text.id === key) {
          return {
            ...text,
            content: newText[key]
          };
        } else {
          return text;
        }
      });

      newWidgetTextObj = { ...newWidgetTextObj, text: textArr };

      return [...oldObjArr, newWidgetTextObj].sort(sortByPosition);
    });
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgetText.map((widget) => {
            return <Widget widget={widget} saveWidgetText={saveWidgetText} />;
          })}
        </div>
        <div className="charts">
          <FireGraph />
        </div>

        <div className="markets">
          <MarketGraph />
        </div>
      </div>
    </div>
  );
};

export default Home;
