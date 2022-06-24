const calcForm = [
  {
    name: "annualExp",
    title: "Annual expenses",
    optional: false,
    desc: "Anticipated spending in retirement.",
    decorStart: "£",
    min: "1",
    max: 1000000
  },
  {
    name: "withdrawalRate",
    title: "Withdrawal rate",
    optional: false,
    desc:
      "Anticipated withdrawal rate in percentage. Recommended is 2.5% - 4%.",
    decorEnd: "%",
    min: 1,
    max: 100
  },
  {
    name: "age",
    title: "Current age",
    optional: false,
    desc: null,
    min: 0,
    max: 120
  },
  {
    name: "initBalance",
    title: "Initial balance",
    optional: false,
    desc: null,
    decorStart: "£",
    min: 0,
    max: 10000000
  },
  {
    name: "returns",
    title: "Annual returns",
    optional: false,
    desc: "Anticipated market returns.",
    decorEnd: "%",
    min: -1000,
    max: 1000
  },
  {
    name: "errorRate",
    title: "Fluctuations in annual returns ",
    optional: true,
    desc: "Anticipated fluctuations in annual return. Default is 50%.",
    decorEnd: "%",
    min: 0,
    max: 200
  },
  {
    name: "deposit",
    title: "Deposit monthly ",
    optional: true,
    desc: "How much you save per month, if any.",
    decorStart: "£",
    min: 0,
    max: 1000000
  }
];

export default calcForm;
