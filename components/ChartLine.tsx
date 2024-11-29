"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Example data for the chart


// Jan: [200, 900, 1300, 1050, 400, 760, 1400, 1700, 1400, 700, 1000, 2000],
// Feb: [3200, 2800, 2200, 2500, 2100, 3000, 4000, 4000, 3000, 2000, 2780, 1890],
//     Mar: [4500, 3300, 2100, 2900, 2000, 2800, 3600, 4000, 3000, 2000, 2780, 1890],
//         Apr: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890],
//                 May: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                     Jun: [2000, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                         Jul: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                             Aug: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                                 Sep: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                                     Oct: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                                         Nov: [2000, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
//                                             Dec: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
const data = [
    { name: "Jan", earnings: 10 },
    { name: "Feb", earnings: 20 },
    { name: "Mar", earnings: 30 },
    { name: "Apr", earnings: 40 },
    { name: "May", earnings: 50 },
    { name: "Jun", earnings: 60 },
    { name: "Jul", earnings: 70 },
    { name: "Sep", earnings: 80 },
    { name: "Sep", earnings: 90 },
    { name: "Oct", earnings: 100 },
    { name: "Nov", earnings: 200 },
    { name: "Dec", earnings: 300 },
    
];

const LineChartWithCustomTooltip = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "red", // Custom background color
                        border: "2px solid #ff0000", // Custom border width and color
                        borderRadius: "5px", // Optional: rounded corners
                        color: "#fff", // Text color inside the tooltip
                    }}
                    itemStyle={{
                        color: "#fff", // Tooltip text color
                    }}
                />
                <Legend />
                <Line type="monotone" dataKey="earnings" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartWithCustomTooltip;
