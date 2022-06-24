import React, { useState } from "react";
import "./calculator.scss";
import calcForm from "./calcFormData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputSection from "../../components/inputSection/InputSection";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import InfoIcon from "../../components/infoIcon/InfoIcon";

// Need to floor numbers
// Translate to graph
// Add fluctuation to calc
// Add validation min max values & disable button if validations fail
// Fix Calculate button

const Calculator = () => {
  const [formData, setFormData] = useState({
    annualExp: 0,
    withdrawalRate: 0,
    age: 0,
    initBalance: 0,
    returns: 0,
    errorRate: 50,
    deposit: 0
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

    console.log(
      annualExp,
      withdrawalRate,
      age,
      initBalance,
      returns,
      errorRate,
      deposit
    );

    const fireNum = annualExp * (100 / withdrawalRate);

    let fireYear = 0;

    let principle = initBalance;
    let interest = 0;
    let growth = returns / 100;
    console.log(growth);
    let total = principle + interest;
    // A = P(1+r/n)(nt)

    while (total < fireNum) {
      for (let j = 1; j <= 12; j++) {
        total = total + deposit;
        principle += deposit;

        interest += total * (growth / 12);

        total = total * (1 + growth / 12);
      }

      fireYear++;
      console.log(
        `year ${fireYear} total is ${total}, check total is ${
          interest + principle
        }, principle is £${principle}`
      );
    }

    console.log(`${fireYear} years to fire with £${total}`);
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
                />
              );
            })}

            <button className="calcBtn" onClick={calcFire}>
              <CalculateRoundedIcon className="calcBtnIcon" fontSize="large" />
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
