"use client";
import IconBudget from "@/public/icons/budget";
import IconsDelete from "@/public/icons/delete";
import IconEdit from "@/public/icons/edit";
import IconSeeMoreTop from "@/public/icons/seeMoreTop";
import { Button, IconButton, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import IconArrowLeft from "@/public/icons/arrowLeft";
import IconBag from "@/public/icons/bag";
import IconMoney from "@/public/icons/money";
import IconPig from "@/public/icons/pig";
import PieChartWithCenterLabel from "@/components/chartInprogress";

const BudgetDetailPage = () => {
    const [value, setValue] = useState(75);
    const router = useRouter();

    const [typeCurrency] = useState([
        { name: "Current money", icon: <IconPig />, price: "10.00 USD" },
        { name: "Product 2", icon: <IconMoney />, price: "50.00 USD" },
        
    ]);

   
    const formatNumber = (value: number): string => {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const handleGoBack = () => {
        // router.push('/budget')
         window.history.go(-1);
    }

    return (
      <div className="w-full flex flex-col gap-4 pt-4 py-10">
        <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
          My Budget
        </p>
        <div className="bg-[#FFFFFF] p-6 px-5 md:px-16 rounded-[10px] shadow-sm py-10">
          <div className="flex justify-start items-center gap-2">
            <IconButton onClick={handleGoBack} aria-label="delete">
              <IconArrowLeft />
            </IconButton>

            <p className="text-[#324C5B] text-[18px] md:text-[18px] font-medium md:font-semibold ">
              Back
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center  ">
            <div className="w-full col-span-2 flex-col ">
              <div className="flex justify-start items-center gap-5 pt-10">
                <IconBag />
                <p className="text-[#24A19C] text-[24px] md:text-[28px] font-medium md:font-semibold ">
                  Bag
                </p>
              </div>
              <p className="text-[#324C5B] text-[24px] font-medium pt-6 md:pt-[40px]">
                Budget Goal
              </p>
              <p className="text-[#6DB33F] text-[32px] md:text-[48px] font-medium pt-3">
                $50.00 USD
              </p>
            </div>
            <div className="w-full col-span-1 ">
              <div className="flex justify-end ml-[60px] md:ml-[60px]">
                <PieChartWithCenterLabel />
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-2">
            <p className="text-[#324C5B] text-[22px] md:text-[24px] font-medium">
              Description
            </p>
            <p className="text-[#93A1AA] text-[18px] md:text-[20px] font-normal">
              When you query timestamptz from the database, PostgreSQL converts
              the UTC value back to the time value of the timezone set by the
              database server, the user, or the current database connection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
            {typeCurrency.map((product, index) => (
              <div
                key={index}
                className="flex justify-start bg-[#F5F5F5] p-2 rounded-[12px] gap-2"
              >
                <div style={{ fontSize: "32px" }}>{product.icon}</div>
                <div className="flex flex-col">
                  <p className="text-[#324C5B] text-[16px] font-normal">
                    {product.name}
                  </p>
                  <p
                    className={` text-[24px] font-normal ${
                      index === 0 ? "text-[#24A19C]" : "text-[#6DB33F]"
                    }`}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default BudgetDetailPage;
