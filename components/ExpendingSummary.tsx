"use client";

import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
// import { Cell, Pie } from "recharts";
import {  Pie, Tooltip, Cell } from "recharts";

const data = [
    { value: 20, label: "Health Care: 20%", color: "#8AC265" },
    { value: 70, label: "Watch: 70%" , color: "#6DB33F"},
    { value: 10, label: "Travelling: 10%", color: "#A7D18C" },
];

const size = {
  width: 290,
  height: 200,
};
  
const ExpendingSummary = () => {
  const [timeFrame, setTimeFrame] = useState("This Week");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTimeFrame(event.target.value as string);
  };

   const dataLegend = [
     { name: "Watch : 10%", icon: "🍎" },
     { name: "Health care: 20%", icon: "🍌" },
     { name: "Travelling: 70%", icon: "🍒" },
   ];
  

  return (
    <div className="w-full flex flex-col gap-4 py-2 px-0 md:px-4">
      {/* Header Section */}
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3">
          <p className="text-[#324C5B] text-[15px] font-semibold">
            Your Expending summary
          </p>
          <p className="text-[#6DB33F] text-[28px] font-semibold">
            {" "}
            $ 1,800.00{" "}
          </p>
          <p className="text-[#6D7D93] text-[15px] font-normal mb-7">
            10 transaction
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

      {/* Pie Chart Section */}
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center relative">
          <div className="mr-[30px] md:mr-[60px] relative">
            <PieChart
              series={[
                {
                  data,
                  innerRadius: 60,
                },
              ]}
              {...size}
              slotProps={{
                legend: { hidden: true },
              }}
            ></PieChart>
                      <div className="">
                          {dataLegend.map((item, index) => (
                              <div
                                  key={index}
                                  className="flex justify-start gap-6 items-center"
                              >
                                  <div
                                      className={`w-[3px] md:w-[3px] h-[20px] md:h-[20px]  ${index === 0
                                          ? "bg-[#A7D18C] absolute !top-[3px] left-[46px] !rotate-[-400deg]"
                                              : index === 1
                                              ? "bg-[#8AC26580] absolute !top-[2px] right-[140px] !rotate-[400deg]"
                                              : "bg-[#6DB33F] absolute !bottom-[10px] right-[248px] !rotate-[400deg]"
                                          }`}
                                  >
                                  </div>
                                  
                                  <p className={`text-[#6DB33F] text-[12px] font-medium  ${index === 0
                                      ? " absolute !top-[-10px] left-[20px] !rotate-[-400deg]"
                                      : index === 1
                                          ? " absolute !top-[-9px] right-[116px] !rotate-[400deg]"
                                          : " absolute !bottom-[-8px] right-[250px] "
                                      }`}>{ index === 0 ?  "10%" : index=== 1 ? "20%" : "70%"}</p>
                                 
                                  {/* Display the name */}
                              </div>
                          ))}
           </div>

          </div>
          <div className="absolute !right-[-10px] md:right-1 top-12 md:top-10">
            <div className="flex flex-col gap-4 ">
              {dataLegend.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start gap-3 items-center"
                >
                  <div
                    className={`w-[12px] md:w-[14px] h-[12px] md:h-[14px] rounded-full ${
                      index === 0
                        ? "bg-[#A7D18C]"
                        : index === 1
                        ? "bg-[#8AC26580]"
                        : "bg-[#6DB33F]"
                    }`}
                  ></div>
                  <span className="text-[12px] md:text-[14px] text-[#000000] font-normal">
                    {item.name}
                  </span>{" "}
                  {/* Display the name */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpendingSummary;
