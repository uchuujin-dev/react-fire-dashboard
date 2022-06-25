import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./calculator.scss";
import calcForm from "./calcFormData.js";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputSection from "../../components/inputSection/InputSection";
// import calcFire from "./functions/calcFire";

const Calculator = () => {
  const navigate = useNavigate();
  // const data = [
  //   {
  //     name: 30,
  //     principle: 20000,
  //     interest: 0
  //   },
  //   {
  //     name: 35,
  //     principle: 95000,
  //     interest: 15500
  //   },
  //   {
  //     name: 40,
  //     principle: 170000,
  //     interest: 55900
  //   },
  //   {
  //     name: 45,
  //     principle: 245000,
  //     interest: 128300
  //   },
  //   {
  //     name: 50,
  //     principle: 320000,
  //     interest: 241300
  //   },
  //   {
  //     name: 55,
  //     principle: 395000,
  //     interest: 406300
  //   },
  //   {
  //     name: 60,
  //     principle: 470000,
  //     interest: 637600
  //   }
  // ];

  const [data, setData] = useState();
  // const toFireGraph = () => {
  //   navigate("/", { state: data });
  // };

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

    // console.log(
    //   annualExp,
    //   withdrawalRate,
    //   age,
    //   initBalance,
    //   returns,
    //   errorRate,
    //   deposit
    // );

    const fireNum = annualExp * (100 / withdrawalRate);

    let fireYear = 0;

    let principle = initBalance;
    let interest = 0;
    let growth = returns / 100;
    // console.log(growth);
    let total = principle + interest;
    // A = P(1+r/n)(nt)
    if (fireNum > 0) {
      setData([]);
      while (total < fireNum) {
        for (let j = 1; j <= 12; j++) {
          total = total + deposit;
          principle += deposit;

          interest += total * (growth / 12);

          total = total * (1 + growth / 12);
        }
        fireYear++;
        // setData((prev) => {
        //   console.log(age);
        //   let newDataObj = {
        //     age: age + fireYear,
        //     principle: principle,
        //     interest: interest
        //   };
        //   console.log("setting data", [newDataObj, ...prev]);
        //   return [newDataObj, ...prev];
        // });

        // console.log(
        //   `age ${age + fireYear} total is ${total}, check total is ${
        //     interest + principle
        //   }, principle is £${principle}, interest is £${interest}`
        // );

        console.log({
          age: age + fireYear,
          principle: principle,
          interest: interest
        });

        // console.log("data", data);
      }
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
              onClick={calcFire}
            >
              <a
              // href="/"
              // onClick={() => {
              //   toFireGraph();
              // }}
              >
                Calculate
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
