"use client";

import * as React from "react";
import MyExpense from "@/components/MyExpense";
import FilterExpense from "@/components/FilterExpense"
const ExpensePage = () => {
  return (
    <div className="w-full mb-[40px]">
      <MyExpense/>
      <FilterExpense/>
    </div>
  );
}

export default ExpensePage;
