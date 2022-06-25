import React from "react";
import "./fireGraph.scss";
import abbreviate from "number-abbreviate";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const FireGraph = ({ data }) => {
  const { darkMode } = useContext(DarkModeContext);

  const sampleData = [
    {
      name: 30,
      principle: 20000,
      interest: 0
    },
    {
      name: 35,
      principle: 95000,
      interest: 15500
    },
    {
      name: 40,
      principle: 170000,
      interest: 55900
    },
    {
      name: 45,
      principle: 245000,
      interest: 128300
    },
    {
      name: 50,
      principle: 320000,
      interest: 241300
    },
    {
      name: 55,
      principle: 395000,
      interest: 406300
    },
    {
      name: 60,
      principle: 470000,
      interest: 637600
    }
  ];

  return (
    <div className="fireGraph" id="fireGraph">
      <div className="title">Projections</div>
      <ResponsiveContainer className="graph" width="99%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data ? data : sampleData}
          margin={{
            top: 10,
            right: 30,
            left: 15,
            bottom: 40
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="grid" />
          <XAxis
            dataKey="name"
            className="axis"
            tick={{ fontSize: 14 }}
            stroke={darkMode ? "#e3e4e6" : "#2e3642"}
          />
          <YAxis
            width={40}
            className="axis"
            tick={{ fontSize: 14 }}
            tickFormatter={abbreviate}
            stroke={darkMode ? "#e3e4e6" : "#2e3642"}
          />
          <Tooltip
            formatter={(value) => new Intl.NumberFormat("en").format(value)}
          />
          <Area
            type="monotone"
            dataKey="principle"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="interest"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FireGraph;
