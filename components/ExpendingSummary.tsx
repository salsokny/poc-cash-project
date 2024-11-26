"use client";

import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

const data = [
  { value: 5, label: "Watch: 10%" },
  { value: 10, label: "Health Care: 20%" },
  { value: 15, label: "Travelling: 70%" },
];

const ExpendingSummary = () => {
  const [timeFrame, setTimeFrame] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeFrame(event.target.value as string);
  };

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "bold" }}>
          Your Expending Summary
        </Typography>
        <FormControl
          sx={{
            width: "120px",
            "& .MuiOutlinedInput-root": {
              height: "40px",
              fontSize: "14px",
              "& fieldset": { borderColor: "#6D7D9326" },
              "&:hover fieldset": { borderColor: "#6DB33F" },
              "&.Mui-focused fieldset": { borderColor: "#6DB33F" },
            },
          }}
          variant="outlined"
          size="small"
        >
          <InputLabel id="timeframe-select-label">Time Frame</InputLabel>
          <Select
            labelId="timeframe-select-label"
            value={timeFrame}
            onChange={handleChange}
            label="Time Frame"
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="this-week">This Week</MenuItem>
            <MenuItem value="this-month">This Month</MenuItem>
            <MenuItem value="custom">Custom Range</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Pie Chart Section */}
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center">
          {/* Pie Chart */}
          <PieChart
            series={[
              {
                data,
                innerRadius: 60,
                outerRadius: 80,
              },
            ]}
            // {...size}
            sx={{
              "& .MuiPieChart-label": {
                fontSize: "12px", // Custom font size for chart labels
                fill: "#333", // Label color
              },
            }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default ExpendingSummary;
