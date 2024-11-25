// /app/home/page.tsx
"use client";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconSeeMore from "@/public/icons/seeMore";
import IconGoUp from "@/public/icons/goUp";
import IconArrowUp from "@/public/icons/arrowUp";
import IconArrowUpPrimary from "@/public/icons/arrowUpPrimary";

export default function HomePage() {
  const [dataTotal] = useState([
    {
      name: "Total Balance",
      amount: "5,000.00",
      percentage: "6.12",
      value: "vs last month",
    },
    {
      name: "Income",
      amount: "3,500.00",
      percentage: "6.12",
      value: "vs last month",
    },
    {
      name: "Expend",
      amount: "1,800.00",
      percentage: "6.12",
      value: "vs last month",
    },
    {
      name: "Budget saving",
      amount: "1,200.00",
      percentage: "6.12",
      value: "vs last month",
    },
  ]);

  return (
    <>
      <div className="w-full flex justify-between items-center gap-2">
        <p className="text-[#324C5B] text-[32px] font-semibold">My Dashboard</p>
        <div className="flex justify-between w-[50%] gap-2">
          <div className="flex items-center space-x-2 p-4">
            {/* Material UI TextField with Tailwind CSS Styling */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              className="max-w-[400px]  " // Tailwind Styling
              sx={{
                width: "900px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  "& fieldset": {
                    borderColor: "#E1E9EE", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#E1E9EE", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E1E9EE", // Focused border color
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="text-gray-500" />
                  </InputAdornment>
                ),
              }}
            />

            <p>This Month</p>
          </div>
          <div className="flex justify-end gap-4"></div>
        </div>
      </div>
      <div className="grid grid-cols-[75%_25%] gap-4 pt-8">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4 p-2">
            {dataTotal.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-[10px] p-4 gap-2 flex flex-col items-start transition-all duration-300 relative  ${
                  index === 0
                    ? "!bg-[#6DB33F] hover:scale-105 shadow-xl" // Add hover effects for the first card
                    : "hover:scale-105 shadow-sm" // For other items, no hover effect
                }`}
              >
                <div
                  className={`absolute ${
                    index === 0 ? "right-2" : "right-1 top-1"
                  }`}
                >
                  {index === 0 ? <IconSeeMore /> : <IconGoUp />}{" "}
                </div>

                <h2
                  className={`text-[16px] font-medium ${
                    index === 0
                      ? "text-[#FFFFFF]" // Add hover effects for the first card
                      : "text-[#7B93A4]" // For other items, no hover effect
                  }`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-[28px] font-bold ${
                    index === 0
                      ? "text-[#FFFFFF]" // Add hover effects for the first card
                      : "text-[#324C5B]" // For other items, no hover effect
                  }`}
                >
                  ${item.amount}
                </p>
                <div className="flex justify-start items-center gap-1">
                  <div
                    className={`flex justify-start gap-1 items-center rounded-full !px-[5px] p-[1px] ${
                      index === 0
                        ? "border-[#F8F8F8] bg-white"
                        : "bg-[#6DB33F1A]"
                    }`}
                  >
                    {index === 0 ? <IconArrowUp /> : <IconArrowUpPrimary />}{" "}
                  
                    <p
                      className={`text-[10px] ${
                        index === 0
                          ? "border-[#F8F8F8] text-[#93A1AA] bg-white"
                          : "bg-[#6DB33F1A] text-[#6DB33F]"
                      }`}
                    >
                      {item.percentage}%
                    </p>
                  </div>
                  <p
                    className={`text-[10px] font-normal ${
                      index === 0
                        ? "text-[#FFFFFF]" // Add hover effects for the first card
                        : "text-[#7B93A4]" // For other items, no hover effect
                    }`}
                  >
                    ${item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-200">
          {/* Content for grid2 */}
          Grid 2 - 20%
        </div>
      </div>
    </>
  );
}
