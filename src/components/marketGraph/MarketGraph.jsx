import React from "react";
import "./marketGraph.scss";
import CustomTable from "../table/CustomTable";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";

import "react-circular-progressbar/dist/styles.css";

const MarketGraph = () => {
  return (
    <div className="marketGraph">
      <div className="top">
        <h1 className="title">Market data</h1>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button className="searchBtn">
            <ManageSearchRoundedIcon />
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="market__table">
          <CustomTable />
        </div>
        <p className="description">Sample data, may not be accurate.</p>
      </div>
    </div>
  );
};

export default MarketGraph;
