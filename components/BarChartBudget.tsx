import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";

// Define the type for each data point
type ChartData = {
  name: string; // The category or label for the Y-axis in a horizontal chart
  sales: number; // The value or data for the X-axis
  color: string; // The custom background color for the bar
};

interface DataItem {
  name: string; // Name of the category (for Y-axis)
  icons: string; // Color for the bar cells
}

// Sample data with the correct type
const data: ChartData[] = [
  { name: "2022", sales: 80, color: "#6DB33F" },
  { name: "2023", sales: 120, color: "#8AC265" },
  { name: "2024", sales: 70, color: "#A7D18C" },
];

const datas: DataItem[] = [
  { name: "2024", icons: "#8884d8" },
  { name: "2023", icons: "#8884d8" },
  { name: "2022", icons: "#8884d8" },
];

const RechartsHorizontalBarChart = () => {
  return (
    <div className="w-full relative mr-20 ">
      <ResponsiveContainer width="100%" height={200} className="mr-20">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 0, left: 0, bottom: 20 }} // Increased left margin for space
          width={600}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeOpacity={0.2}
            stroke="#888"
            //   strokeDasharray="10 10"
            // Adjust horizontal points based on the data
            horizontalPoints={[20, 62, 107]}
          />
          <XAxis
            type="number"
            //   dataKey="name"
            tickLine={false} // Disable tick lines (the small lines next to ticks)
            axisLine={{ strokeWidth: 1, strokeOpacity: 0.2 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            orientation="left"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value}
            dx={1} // Adjust horizontal offset for Y-axis labels
            className="!z-50"
            tick={{
              fill: "#4caf50",
              fontSize: 14,
              fontWeight: "bold",
              style: { zIndex: 50 },
            }}
          />
          <Tooltip />
          <Bar className="!z-0" dataKey="sales" isAnimationActive={false}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-start gap-3 ml-10">
        {datas.map((item, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <div
              className={`w-[14px] h-[14px] rounded-full ${
                index === 0
                  ? "bg-[#6DB33F]"
                  : index === 1
                  ? "bg-[#8AC265]"
                  : "bg-[#A7D18C]"
              }`}
            ></div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechartsHorizontalBarChart;
