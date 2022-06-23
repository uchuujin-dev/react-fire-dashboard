const calcForm = [
  {
    name: "annualExp",
    title: "Annual expenses",
    optional: false,
    desc: "Anticipated spending in retirement.",
    decorStart: "£"
  },
  {
    name: "withdrawalRate",
    title: "Withdrawal rate",
    optional: false,
    desc:
      "Anticipated withdrawal rate in percentage. Recommended is 2.5% - 4%.",
    decorEnd: "%"
  },
  {
    name: "age",
    title: "Current age",
    optional: false,
    desc: null
  },
  {
    name: "initBalance",
    title: "Initial balance",
    optional: false,
    desc: null,
    decorStart: "£"
  },
  {
    name: "returns",
    title: "Annual returns",
    optional: false,
    desc: "Anticipated market returns.",
    decorEnd: "%"
  },
  {
    name: "errorRate",
    title: "Fluctuations in annual returns ",
    optional: true,
    desc: "Anticipated fluctuations in annual return. Default is 50%.",
    decorEnd: "%"
  },
  {
    name: "deposit",
    title: "Deposit monthly ",
    optional: true,
    desc: "How much you save per month, if any.",
    decorStart: "£"
  }
];

export default calcForm;
