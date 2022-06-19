import React from "react";
import "./calculator.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

const Calculator = () => {
  return (
    <div className="calculator">
      <Sidebar />
      <div className="calcContainer">
        <Navbar />
        <div className="mainSection">
          <div className="header">
            <h1 className="title">Calculator</h1>
          </div>
          <div className="form">
            <article className="inputGroup">
              <label htmlFor="">Annual expenses</label>
              <input type="text" />
            </article>
            <article className="inputGroup">
              <label htmlFor="">Withdrawal rate</label>
              <input type="text" />
            </article>
            <article className="inputGroup">
              <label htmlFor="">Initial balance</label>
              <input type="text" />
            </article>
            <article className="inputGroup">
              <label htmlFor="">Annual growth</label>
              <input type="text" />
            </article>
            <article className="inputGroup">
              <label htmlFor="">Years</label>
              <input type="text" />
            </article>
            <article className="inputGroup">
              <label htmlFor="">
                Deposit monthly <span className="optional">(optional)</span>
              </label>
              <input type="text" />
            </article>

            <button className="calcBtn">
              <CalculateRoundedIcon className="calcBtnIcon" fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
