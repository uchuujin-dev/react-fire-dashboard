import React, { useState } from "react";
import "./marketGraph.scss";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MarketGraph = () => {
  const [toggleFlip, setToggleFlip] = useState(false);

  function flipCard() {
    const currentState = toggleFlip;
    setToggleFlip(!currentState);
  }

  return (
    <div className={toggleFlip ? "marketGraph is_flipped" : "marketGraph"}>
      <div className="market__front" onClick={() => flipCard()}>
        <div className="top">
          <h1 className="title">Market data</h1>
          <ManageSearchRoundedIcon />
        </div>
        <div className="bottom">
          <div className="market__table">
            <CircularProgressbar value={70} text="70%" strokeWidth={5} />
          </div>
          <p className="description">
            All data are fetched from external API, may not be accurate.
          </p>
        </div>
      </div>
      <div className="market__back" onClick={() => flipCard()}>
        <h1>back</h1>
      </div>
    </div>
  );
};

export default MarketGraph;
