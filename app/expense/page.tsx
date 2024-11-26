"use client";

import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

// Example data for each month
const monthlyData = {
  January: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  February: [3200, 2800, 2200, 2500, 2100, 3000, 4000],
  March: [4500, 3300, 2100, 2900, 2000, 2800, 3600],
  April: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  May: [4800, 3200, 2900, 3000, 2700, 3100, 3900],
};

// Example x-axis labels
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function SimpleAreaChart() {
  const [selectedMonth, setSelectedMonth] =
    React.useState<keyof typeof monthlyData>("January");
  const [earningFilter, setEarningFilter] = React.useState<number>(0);

  // Filter months based on total earnings threshold
  const filteredMonths = Object.keys(monthlyData).filter((month) => {
    const total = monthlyData[month as keyof typeof monthlyData].reduce(
      (sum, value) => sum + value,
      0
    );
    return total >= earningFilter;
  });

  // Filtered data for the selected month
  const filteredData =
    filteredMonths.includes(selectedMonth) &&
    monthlyData[selectedMonth as keyof typeof monthlyData];

  // Calculate total earnings for the selected month
  const totalEarnings = filteredData
    ? filteredData.reduce((sum, value) => sum + value, 0)
    : 0;

  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedMonth(event.target.value as keyof typeof monthlyData);
  };

  const handleEarningFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEarningFilter(Number(event.target.value));
  };

  return (
    <div>
      {/* Filter by total earnings */}
      <TextField
        label="Minimum Total Earnings"
        type="number"
        value={earningFilter}
        onChange={handleEarningFilterChange}
        fullWidth
        margin="normal"
      />

      {/* Dropdown to filter by month */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="month-select-label">Select Month</InputLabel>
        <Select
          labelId="month-select-label"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {filteredMonths.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* LineChart */}
      {filteredData && (
        <LineChart
          width={500}
          height={300}
          series={[
            {
              data: filteredData,
              label: `${selectedMonth} Earnings`,
              area: true,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: "none",
            },
          }}
        />
      )}

      {/* Total Earnings */}
      <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "bold" }}>
        <p>
          Total Earnings for {selectedMonth}: ${totalEarnings.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
