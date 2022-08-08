import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./calculator.scss";
import calcForm from "./calcFormData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputSection from "../../components/inputSection/InputSection";

const Calculator = ({ setData }) => {
  const navigate = useNavigate();

  let tempData = [];
  let fireNum;

  function toFireGraph() {
    setData({ graph: tempData, fireNumber: fireNum });
    navigate("/");
  }

  const [warning, setWarning] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

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

    fireNum = annualExp * (100 / withdrawalRate);

    let fireYear = 0;

    let principle = initBalance;
    let interest = 0;
    let growth = returns / 100;
    let maxAge = 120;
    let ageCounter = age;

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
        ageCounter++;
        console.log("fire year, total, fireNum", fireYear, total, fireNum);

        console.log("total < fireNum", total < fireNum);
        tempData.push({
          name: age + fireYear,
          principle: principle,
          interest: interest
        });
      }
      if (ageCounter === maxAge && total < fireNum) {
        console.log("No fire for you.");
      }
    }
  }

  // useEffect(() => {
  //   if (warning && Object.keys(warning).length !== 0) {
  //     console.log("warning exists: ", warning);
  //     setIsDisabled(true);
  //   } else {
  //     console.log("warning doesn't exist, returning isDisabled = false");
  //     setIsDisabled(false);
  //   }
  // }, [warning]);

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
                  setWarning={setWarning}
                  setIsDisabled={setIsDisabled}
                  warning={warning}
                />
              );
            })}

            <button
              disabled={isDisabled}
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
