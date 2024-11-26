// /app/home/page.tsx
"use client";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconSeeMore from "@/public/icons/seeMore";
import IconGoUp from "@/public/icons/goUp";
import IconArrowUp from "@/public/icons/arrowUp";
import IconArrowUpPrimary from "@/public/icons/arrowUpPrimary";
import AnalitcsReportChart from "@/components/AnalitcsReport";
import RecentTransaction from "@/components/RecentTransaction";
import ExpendingSummary from "@/components/ExpendingSummary";

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
      {/* Search */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
          My Dashboard
        </p>
        <div className="flex justify-between w-full md:w-auto gap-0 md:gap-4">
          <div className="flex items-center space-x-2 p-1 md:p-4 w-full md:w-auto">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              className="w-full max-w-[400px]" // Tailwind styling for responsive width
              sx={{
                width: "100%", // Full width for small screens
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

            <p className="hidden md:block text-sm text-gray-600">This Month</p>
          </div>
          <div className="flex justify-end gap-4">
            {/* You can add more items here as needed */}
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-[100%-100%] md:grid-cols-[75%_25%] gap-4 pt-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-0 md:p-2">
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
          {/*  Analitcs Report */}
          <div className="w-full">
            <p className="text-[#324C5B] text-[24px] font-bold mt-10 pb-5">
              Analitcs Report
            </p>
            <div className="bg-[#FFFFFF] shadow-md p-8 rounded-[10px] ">
              <AnalitcsReportChart />
            </div>
          </div>

          {/*  Recent Transaction */}
          <div className="w-full">
            <p className="text-[#324C5B] text-[24px] font-bold mt-10 pb-5">
              Recent Transaction
            </p>
            <div className="bg-[#FFFFFF] shadow-md p-8 rounded-[10px] ">
              <RecentTransaction />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bg-[#f4f7fa]">
          <div className="w-full bg-white !p-4">
            <ExpendingSummary />
          </div>
        </div>
      </div>
    </>
  );
}
