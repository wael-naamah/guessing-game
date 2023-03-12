import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "0", value: 0 },
  { name: "1", value: 3 },
  { name: "2", value: 15 },
  { name: "3", value: 100 },
  { name: "4", value: 150 },
  { name: "5", value: 233 },
  { name: "6", value: 333 },
  { name: "7", value: 399 },
  { name: "8", value: 456 },
  { name: "9", value: 555 },
  { name: "10", value: 766 },
];

// 232A39

export default function Charts() {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <CartesianGrid stroke="transparent" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}
