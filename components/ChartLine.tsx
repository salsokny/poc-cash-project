"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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
