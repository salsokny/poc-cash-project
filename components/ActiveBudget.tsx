"use client";
import IconArrowUp from "@/public/icons/arrowUp";
import IconArrowUpPrimary from "@/public/icons/arrowUpPrimary";
import IconGoUp from "@/public/icons/goUp";
import IconSeeMore from "@/public/icons/seeMore";
import { Button } from "@mui/material";
import React ,{ useState } from "react";

const ActiveBudget = () => {
    const [activeBudget] = useState([
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
       
    ]);
    return (
        <div className="w-full flex flex-col gap-4 pt-4">
            <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
                My Budget
            </p>
            <div className="bg-[#FFFFFF] p-6 rounded-[10px] shadow-sm">
                <p className="text-[#324C5B] text-[16px] md:text-[18px] font-medium md:font-semibold ">
                    Transaction Budget
                </p>

                <div className="flex justify-end gap-2">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className=" mt-[20px] !text-[16px] md:!text-[18px] md:mt-8 !bg-[#6DB33F] w-full md:w-[20%] !normal-case !rounded-[5px] !py-1 md:!py-1"
                    >
                        Create budget
                    </Button>
                </div>
            </div>

            <div className="w-full">
                <p className="text-[#324C5B] text-[16px] md:text-[20px] font-medium md:font-semibold pt-4">
                    Active Budget
                </p>

                <div className="grid grid-cols-3 gap-3">

                    {activeBudget.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-[10px] p-4 gap-2 flex flex-col items-start transition-all duration-300 relative `}
                        >
                            <div
                                className={`absolute ${index === 0 ? "right-2" : "right-1 top-1"
                                    }`}
                            >
                                {index === 0 ? <IconSeeMore /> : <IconGoUp />}{" "}
                            </div>

                            <h2
                                className={`text-[16px] font-medium text-[#7B93A4]`}
                            >
                                {item.name}
                            </h2>
                            <p
                                className={`text-[28px] font-bold text-[#324C5B]`}
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
                                        className={`text-[10px] bg-[#6DB33F1A] text-[#6DB33F]`}
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
            </div>
        </div>
    )
};

export default ActiveBudget;