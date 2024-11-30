"use client";
import IconBudget from "@/public/icons/budget";
import IconsDelete from "@/public/icons/delete";
import IconEdit from "@/public/icons/edit";
import IconSeeMoreTop from "@/public/icons/seeMoreTop";
import { Button, IconButton, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ActiveBudget = () => {
  const [value, setValue] = useState(75);
  const router = useRouter();
  const [activeBudget] = useState([
    {
      title: "Watch budget",
      name: "Total Balance",
      percentage: "6.12",
      value: "vs last month",
      amount: 50,
    },
    {
      title: "Fixed house budget",
      name: "Income",
      percentage: "6.12",
      value: "vs last month",
      amount: 100,
    },
    {
      title: "Health check budget",
      name: "Expend",
      percentage: "6.12",
      value: "vs last month",
      amount: 70,
    },
  ]);

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleToCreateBudget = () => {
    router.push('/create-budget')
  }

  const handleToBudGetDetail = () => { 
    router.push('/budget/detail')
  }

  const handleToEditBudget = () => {
    router.push('/create-budget')
  }

  return (
    <div className="w-full flex flex-col gap-4 pt-4 ">
      <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
        My Budget
      </p>
      <div className="bg-[#FFFFFF] p-6 rounded-[10px] shadow-sm">
        <p className="text-[#324C5B] text-[16px] md:text-[18px] font-medium md:font-semibold ">
          Transaction Budget
        </p>

        <div className="flex justify-end gap-2">
          <Button
            onClick={handleToCreateBudget}
            type="submit"
            variant="contained"
            color="primary"
            className=" mt-[20px] !text-[16px] md:!text-[18px] md:mt-8 !bg-[#6DB33F] w-full md:w-[20%] !normal-case !rounded-[5px] !py-1 md:!py-1"
          >
            Create budget
          </Button>
        </div>
      </div>

      <div className="w-full pt-4">
        <p className="text-[#324C5B] text-[16px] md:text-[20px] font-medium md:font-semibold pt-4">
          Active Budget
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-5">
          {activeBudget.map((item, index) => (
            <div
              key={index}
              className={`bg-white  border-[1px] border-[#E1E9EE] !rounded-[10px] gap-2 flex flex-col items-start transition-all duration-300 relative `}
            >
              <div className="w-full bg-[#F8F8F8] !rounded-tr-[10px] !rounded-tl-[10px]">
                <div className="flex justify-between items-center gap-2 p-2">
                  <p className="text-[#000000] text-[18px] md:text-[20px] font-medium pl-2 line-clamp-1">
                    {item.title}
                  </p>
                  <div className="flex justify-end items-center gap-2">
                    <IconButton aria-label="delete">
                      <IconsDelete />
                    </IconButton>
                    <IconButton onClick={handleToEditBudget} aria-label="delete">
                      <IconEdit />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <IconSeeMoreTop />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div
                onClick={handleToBudGetDetail}
                className="w-full !p-4 !cursor-pointer bg-[#FFFFFF] !rounded-br-[10px] rounded-bl-[10px]"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-start gap-5">
                    <IconBudget />
                    <div className="flex flex-col gap-0">
                      <p className="text-[#93A1AA] text-[16px] font-medium">
                        Budget goal
                      </p>
                      <div className="flex justify-start items-center gap-2">
                        <span className="text-[#93A1AA] text-[20px] font-medium">
                          Amount :{" "}
                        </span>
                        <span className="text-[#324C5B] text-[28px] font-medium line-clamp-1">
                          $ {formatNumber(item.amount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ width: "100%" }} className="">
                  <Box sx={{ width: "100%" }}>
                    {/* Display the value as a percentage */}
                    <Typography
                      className="text-end text-[#93A1AA] text-[12px] font-medium"
                      sx={{ marginBottom: "8px" }}
                    >
                      {value}%
                    </Typography>

                    {/* Linear Progress bar */}
                    <LinearProgress
                      variant="determinate" // Indicates the progress is based on a value
                      value={value} // Current progress value
                      sx={{
                        height: 8,
                        borderRadius: 2,
                        backgroundColor: "#e0e0e0", // Rail color
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#8AC265", // Progress bar color
                        },
                      }}
                    />
                  </Box>
                  <div className="w-full pt-5">
                    {" "}
                    <span className="text-[#7B93A4] text-[14px] font-medium">
                      $ 20.00
                    </span>{" "}
                    <span className=" text-[#93A1AA] text-[14px] font-medium">
                      remaining to complete goal{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveBudget;
