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
  let fireNum;
  let fireAge;

  function toFireGraph() {
    setData({ graph: tempData, fireNumber: fireNum, fireAge: fireAge });
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
    errorRate: 0,
    deposit: 1000
  });

  function handleCalc(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData((prev) => {
      // console.log({
      //   ...prev,
      //   [name]: value
      // });
      return {
        ...prev,
        [name]: value
      };
    });
  }
  // function fluctuateGrowthContinuous(growth, fluctuation) {
  //   const min = growth - growth * (fluctuation / 100);
  //   const max = growth + growth * (fluctuation / 100);

  //   console.log("start: ", min, " end: ", max);
  //   if (min === max) {
  //     return growth;
  //   } else {
  //     const returns = parseFloat(
  //       (Math.random() * (max - min) + min).toFixed(3)
  //     );
  //     console.log(returns);
  //     return returns;
  //   }
  // }

  function fluctuateGrowthNormal(growth, fluctuation, skew = 1) {
    const min = growth - growth * (fluctuation / 100);
    const max = growth + growth * (fluctuation / 100);
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = fluctuateGrowthNormal(min, max, skew);
    // resample between 0 and 1 if out of range
    else {
      num = Math.pow(num, skew); // Skew
      num *= max - min; // Stretch to fill range
      num += min; // offset to min
    }
    return num.toFixed(3);
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

    fireNum = (annualExp * (100 / withdrawalRate)).toFixed(0);

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
        let growthWithErrorRate = fluctuateGrowthNormal(growth, errorRate);

        for (let j = 1; j <= 12; j++) {
          total = total + deposit;
          principle += deposit;
          interest += total * (growthWithErrorRate / 12);
          total = total * (1 + growthWithErrorRate / 12);
        }
        fireYear++;
        ageCounter++;
        fireAge = ageCounter;

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
