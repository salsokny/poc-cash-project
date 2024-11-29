// /app/home/page.tsx
"use client";
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconSeeMore from "@/public/icons/seeMore";
import IconGoUp from "@/public/icons/goUp";
import IconArrowUp from "@/public/icons/arrowUp";
import IconArrowUpPrimary from "@/public/icons/arrowUpPrimary";
import AnalitcsReportChart from "@/components/AnalitcsReport";
import RecentTransaction from "@/components/RecentTransaction";
import ExpendingSummary from "@/components/ExpendingSummary";
import ProgressList from "@/components/ProgressBudget";
import BudgetAchievement from "@/components/BudgetAchievement";
import LineChartWithCustomTooltip from "@/components/ChartLine";
import IconClock from "@/public/icons/clock";


export default function HomePage() {
    const [filter, setFilter] = useState("all");
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
        <div className="w-full mb-11">
            {/* Search */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4 ">
                <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
                    My Dashboard
                </p>
                <div className="flex justify-between w-full md:w-auto gap-0 md:gap-4">
                    <div className="flex items-center space-x-2 p-1 md:p-6 w-full md:w-auto">
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search..."
                            className="w-full max-w-[400px]" // Tailwind styling for responsive width
                            sx={{
                                width: "300px",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    height: "40px",
                                    fontSize: "14px",
                                    "& fieldset": { borderColor: "#6D7D9326" },
                                    "&:hover fieldset": { borderColor: "#6DB33F" },
                                    "&.Mui-focused fieldset": { borderColor: "#6DB33F" },
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
                        <FormControl className="hidden md:flex" sx={{
                            width: "300px",
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
                            size="small">
                            <InputLabel>Filter</InputLabel>
                            <Select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                label="Filter"
                                className="!text-sm !border-gray-300  !rounded-lg"

                            >
                                <MenuItem value="all">
                                    <div className="flex justify-start items-center gap-4">
                                        <IconClock />
                                        Last 30 Days
                                    </div>
                                </MenuItem>
                                <MenuItem value="thisweek">
                                    <div className="flex justify-start items-center gap-4">
                                        <IconClock />
                                        This Week
                                    </div>
                                </MenuItem>
                                <MenuItem value="thismonth">
                                    <div className="flex justify-start items-center gap-4">
                                        <IconClock />
                                        This Month
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>

                        {/* <p className="hidden md:block text-sm text-gray-600">This Month</p> */}
                    </div>
                    <div className="flex justify-end gap-4">
                        {/* You can add more items here as needed */}
                    </div>
                </div>
            </div>

            {/* Card grid-cols-[100%-100%] md:grid-cols-[75%_25%]*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0  md:gap-4 pt-8">
                <div className="w-full col-span-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-0 md:p-2">
                        {dataTotal.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-[10px] p-4 gap-2 flex flex-col items-start transition-all duration-300 relative  ${index === 0
                                        ? "!bg-[#6DB33F] hover:scale-105 shadow-xl" // Add hover effects for the first card
                                        : "hover:scale-105 shadow-sm" // For other items, no hover effect
                                    }`}
                            >
                                <div
                                    className={`absolute ${index === 0 ? "right-2" : "right-1 top-1"
                                        }`}
                                >
                                    {index === 0 ? <IconSeeMore /> : <IconGoUp />}{" "}
                                </div>

                                <h2
                                    className={`text-[16px] font-medium ${index === 0
                                            ? "text-[#FFFFFF]" // Add hover effects for the first card
                                            : "text-[#7B93A4]" // For other items, no hover effect
                                        }`}
                                >
                                    {item.name}
                                </h2>
                                <p
                                    className={`text-[28px] font-bold ${index === 0
                                            ? "text-[#FFFFFF]" // Add hover effects for the first card
                                            : "text-[#324C5B]" // For other items, no hover effect
                                        }`}
                                >
                                    ${item.amount}
                                </p>
                                <div className="flex justify-start items-center gap-1">
                                    <div
                                        className={`flex justify-start gap-1 items-center rounded-full !px-[5px] p-[1px] ${index === 0
                                                ? "border-[#F8F8F8] bg-white"
                                                : "bg-[#6DB33F1A]"
                                            }`}
                                    >
                                        {index === 0 ? <IconArrowUp /> : <IconArrowUpPrimary />}{" "}
                                        <p
                                            className={`text-[10px] ${index === 0
                                                    ? "border-[#F8F8F8] text-[#93A1AA] bg-white"
                                                    : "bg-[#6DB33F1A] text-[#6DB33F]"
                                                }`}
                                        >
                                            {item.percentage}%
                                        </p>
                                    </div>
                                    <p
                                        className={`text-[10px] font-normal ${index === 0
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
                        <p className="!text-[#324C5B] text-[24px] font-bold mt-12 pb-7">
                            Analitcs Report
                        </p>
                        <div className="bg-[#FFFFFF] border-[#6D7D9326] p-8 rounded-[10px] overflow-x-auto">
                            <AnalitcsReportChart />
                        </div>
                    </div>

                    {/*  Recent Transaction */}
                    <div className="w-full">
                        <p className="!text-[#324C5B] text-[24px] font-bold mt-12 pb-7">
                            Recent Transaction
                        </p>
                        <div className="bg-[#FFFFFF] border-[#6D7D9326] !rounded-[10px] ">
                            <RecentTransaction />
                        </div>
                    </div>
                </div>
                {/* right */}
                {/* your expending */}
                <div className="bg-[#f4f7fa] mr-0 md:mr-[-100px] mt-[40px] md:mt-0">
                    <div className="flex flex-col gap-8">
                        <div className="w-full bg-white border-[#6D7D9326] border-[1px] rounded-[10px] !p-4">
                            <ExpendingSummary />
                        </div>
                        {/* progress budget */}
                        <div className="w-full bg-white border-[#6D7D9326] border-[1px] rounded-[10px] !p-4">
                            <ProgressList />
                        </div>

                        {/* Budget achievement */}

                        <div className="w-full bg-white border-[#6D7D9326] border-[1px] rounded-[10px] !p-4 !py-6">
                            <BudgetAchievement />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
