import React from "react";
import "./simulator.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Simulator = () => {
  return (
    <div className="simulator">
      <Sidebar />
      <div className="simContainer">
        <Navbar />
        <div className="mainSection">
          <div className="header">
            <h1 className="title">FIRE SIMULATOR</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
