"use client"
import {PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend} from "recharts"
const data02 = [
  {
    "name": "Layanan Publik",
    "value": 33,
    "color":"#5B93FF"
  },
  {
    "name": "Kota Serang",
    "value": 33,
    "color":"#FFD66B"
  },
  {
    "name": "Pemerintahan",
    "value": 34,
    "color":"#FF8F6B"
  }
];

const COLORS = ["#5B93FF", "#FF8F6B", "#FFD66B"];

export function OrdersByDayChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip />
        <Legend/>
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={2}
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}