function calcFire(formData) {
  let {
    annualExp,
    withdrawalRate,
    age,
    initBalance,
    returns,
    errorRate,
    deposit
  } = formData;

  [annualExp, withdrawalRate, age, initBalance, returns, errorRate, deposit] = [
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
  if (fireNum > 0 && fireNum < 10000000) {
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
  }

  console.log(`${fireYear} years to fire with £${total}`);
}

export default calcFire;
