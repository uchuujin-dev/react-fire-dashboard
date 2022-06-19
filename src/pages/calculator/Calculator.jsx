import React, { useState } from "react";
import "./calculator.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

const Calculator = () => {
  const [formData, setFormData] = useState({
    annualExp: 0,
    withdrawalRate: 0,
    age: 0,
    initial: 0,
    growth: 0,
    deposit: 0
  });
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
              <label htmlFor="annualExp">Annual expenses</label>
              <input type="number" name="annualExp" />
            </article>
            <article className="inputGroup">
              <label htmlFor="withdrawalRate">Withdrawal rate</label>
              <input type="number" name="withdrawalRate" />
            </article>
            <article className="inputGroup">
              <label htmlFor="age">Current age</label>
              <input type="number" name="age" />
            </article>
            <article className="inputGroup">
              <label htmlFor="initial">Initial balance</label>
              <input type="number" name="initial" />
            </article>
            <article className="inputGroup">
              <label htmlFor="growth">Annual growth</label>
              <input type="number" name="growth" />
            </article>
            <article className="inputGroup">
              <label htmlFor="deposit">
                Deposit monthly <span className="optional">(optional)</span>
              </label>
              <input type="number" name="deposit" />
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
