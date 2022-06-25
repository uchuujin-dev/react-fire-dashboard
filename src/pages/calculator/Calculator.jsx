import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./calculator.scss";
import calcForm from "./calcFormData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputSection from "../../components/inputSection/InputSection";

const Calculator = ({ setData }) => {
  const navigate = useNavigate();

  let tempData = [];

  function toFireGraph() {
    setData(tempData);
    navigate("/");
  }

  const [warning, setWarning] = useState();

  const [formData, setFormData] = useState({
    annualExp: 30000,
    withdrawalRate: 2.5,
    age: 30,
    initBalance: 10000,
    returns: 8,
    errorRate: 50,
    deposit: 1000
  });

  function handleCalc(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData((prev) => {
      console.log({
        ...prev,
        [name]: value
      });
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function calcFire() {
    let {
      annualExp,
      withdrawalRate,
      age,
      initBalance,
      returns,
      errorRate,
      deposit
    } = formData;

    [
      annualExp,
      withdrawalRate,
      age,
      initBalance,
      returns,
      errorRate,
      deposit
    ] = [
      annualExp,
      withdrawalRate,
      age,
      initBalance,
      returns,
      errorRate,
      deposit
    ].map(Number);

    const fireNum = annualExp * (100 / withdrawalRate);

    let fireYear = 0;

    let principle = initBalance;
    let interest = 0;
    let growth = returns / 100;

    let total = principle + interest;
    // A = P(1+r/n)(nt)
    if (fireNum > 0) {
      while (total < fireNum) {
        for (let j = 1; j <= 12; j++) {
          total = total + deposit;
          principle += deposit;

          interest += total * (growth / 12);

          total = total * (1 + growth / 12);
        }
        fireYear++;

        tempData.push({
          name: age + fireYear,
          principle: principle,
          interest: interest
        });
      }
    }
  }

  return (
    <div className="calculator">
      <Sidebar />
      <div className="calcContainer">
        <Navbar />
        <div className="mainSection">
          <div className="header">
            <h1 className="title">INVESTMENT CALCULATOR</h1>
          </div>
          <div className="form">
            {calcForm.map((e) => {
              return (
                <InputSection
                  name={e.name}
                  title={e.title}
                  optional={e.optional}
                  desc={e.desc}
                  decorStart={e.decorStart}
                  onChange={handleCalc}
                  formData={formData}
                  decorEnd={e.decorEnd}
                  min={e.min}
                  max={e.max}
                  // setIsValid={setIsValid}
                  setWarning={setWarning}
                  warning={warning}
                />
              );
            })}

            <button
              disabled={warning ? true : false}
              className="calcBtn"
              onClick={() => {
                calcFire();
                toFireGraph();
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
