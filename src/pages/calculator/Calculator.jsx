import React, { useState } from "react";
import "./calculator.scss";
import calcForm from "./calcFormData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputSection from "../../components/inputSection/InputSection";
import calcFire from "./functions/calcFire";

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

            <button className="calcBtn" onClick={calcFire(formData)}>
              {/* <CalculateRoundedIcon className="calcBtnIcon" fontSize="large" /> */}
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
