"use client";
import React from "react";
import { CircularProgress, IconButton } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"; // Example icon
import IconArrowRight from "@/public/icons/arrowRight";
import ProgressingBuget from "./progressing";

// Define types for the data
interface ProgressItem {
  id: number;
  name: string;
  progress: number; // Progress as a percentage (0-100)
  month: string;
  icon: React.ReactNode; // The icon can be any React component
}

// Example Data
const data: ProgressItem[] = [
  {
    id: 1,
    name: "Sale of goods",
    progress: 75, // Progress as percentage
    month: "1 month later",
    icon: <AccessAlarmIcon />, // Example icon
  },
  {
    id: 2,
    name: "property rental",
    progress: 50,
    month: "February",
    icon: <AccessAlarmIcon />,
  },
  {
    id: 3,
    name: "design services",
    progress: 90,
    month: "3 month later",
    icon: <AccessAlarmIcon />,
  },
  {
    id: 4,
    name: "Service",
    progress: 50,
    month: "4 month later",
    icon: <AccessAlarmIcon />,
  },
  {
    id: 5,
    name: "Service",
    progress: 90,
    month: "1 month later",
    icon: <AccessAlarmIcon />,
  },
];

const ProgressList: React.FC = () => {
  return (
    <div>
      <p className="text-[#324C5B] text-[18px] font-semibold pb-4">
        Budget progress
      </p>
      <div className="w-full flex flex-col gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#6D7D9326] shadow-[2px] p-1 rounded-[8px]"
          >
            <div className="flex justify-between">
              <div className="flex justify-start items-center gap-2">
                <ProgressingBuget />
                {/* <h3 className="text-lg font-semibold">{item.name}</h3> */}
                <div className="flex flex-col gap-3">
                  <p className="text-[#000000] text-[14px] font-medium">
                    {" "}
                    {item.name}
                  </p>
                  <p className="text-[#6D7D93] text-[10px] font-bold">
                    {" "}
                    {item.month}
                  </p>
                </div>
              </div>
              <IconButton aria-label="delete">
                <IconArrowRight />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressList;
