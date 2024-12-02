"use client";
import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import RechartsBarChart from "./BarChartBudget";

// Define types for the data
// interface ProgressItem {
//   id: number;
//   name: string;
//   progress: number; // Progress as a percentage (0-100)
//   month: string;
//   icon: React.ReactNode; // The icon can be any React component
// }

// Example Data
// const data: ProgressItem[] = [
//   {
//     id: 1,
//     name: "Sale of goods",
//     progress: 75, // Progress as percentage
//     month: "1 month later",
//     icon: <AccessAlarmIcon />, // Example icon
//   },
//   {
//     id: 2,
//     name: "property rental",
//     progress: 50,
//     month: "February",
//     icon: <AccessAlarmIcon />,
//   },
//   {
//     id: 3,
//     name: "design services",
//     progress: 90,
//     month: "3 month later",
//     icon: <AccessAlarmIcon />,
//   },
//   {
//     id: 4,
//     name: "Service",
//     progress: 50,
//     month: "4 month later",
//     icon: <AccessAlarmIcon />,
//   },
//   {
//     id: 5,
//     name: "Service",
//     progress: 90,
//     month: "1 month later",
//     icon: <AccessAlarmIcon />,
//   },
// ];

const BudgetAchievement = () => {
     const [timeFrame, setTimeFrame] = useState("This Week");

     const handleChange = (event: SelectChangeEvent<string>) => {
       setTimeFrame(event.target.value as string);
     };
    
  return (
    <div className="w-full ">
      {/* Header Section */}
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3">
          <p className="text-[#324C5B] text-[15px] font-semibold">
            Budget achievement
          </p>
          <p className="text-[#6DB33F] text-[28px] font-semibold">
            {" "}
            $ 1,800.00{" "}
          </p>
          <p className="text-[#6D7D93] text-[15px] font-normal">
            5 achievements
          </p>
        </div>
        <FormControl
          sx={{
            width: "120px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
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
          <Select
            labelId="timeframe-select-label"
            value={timeFrame}
            onChange={handleChange}
            label=""
          >
            <MenuItem value="this-week">This Week</MenuItem>
            <MenuItem value="this-month">This Month</MenuItem>
            <MenuItem value="custom">Custom Range</MenuItem>
          </Select>
        </FormControl>
      </div>

          <div className="w-full">
          <RechartsBarChart/>
          </div> 
    </div>
  );
};

export default BudgetAchievement;
