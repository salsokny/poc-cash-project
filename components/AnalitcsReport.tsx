"use client";
import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import {
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";

// Example data for each month
const monthlyData: Record<string, number[]> = {
    Jan: [200, 900, 1300, 1050, 400, 760, 1400, 1700, 1400, 700, 1000, 2000],
    Feb: [3200, 2800, 2200, 2500, 2100, 3000, 4000, 4000, 3000, 2000, 2780, 1890],
    Mar: [4500, 3300, 2100, 2900, 2000, 2800, 3600, 4000, 3000, 2000, 2780, 1890],
    Apr: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890],
    May: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Jun: [2000, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Jul: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Aug: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Sep: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Oct: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Nov: [2000, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
    Dec: [4800, 3200, 2900, 3000, 2700, 3100, 3900, 4000, 3000, 2000, 2780, 1890],
};

// Example x-axis labels
const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const yLabels = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000];

const AnalitcsReportChart: React.FC = () => {
    const [selectedMonth] = React.useState<keyof typeof monthlyData>("Jan");

    const totalExpense = "Total Expense"; // Example value
    const [selectTotalExpense, setSelectTotalExpense] = React.useState<string>(totalExpense);

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
    // const totalEarnings = filteredData
    //     ? filteredData.reduce((sum, value) => sum + value, 0)
    //     : 0;

    const handleChangeTotalExpense = (event: SelectChangeEvent<string>) => {
      setSelectTotalExpense(event.target.value);
    };

    const handleEarningFilterChange = (event: SelectChangeEvent<string>) => {
      setEarningFilter(Number(event.target.value));
    };

    return (
        <div>
            {/* Filter by total earnings */}
            <div className="flex justify-end gap-4">
                <FormControl
                    sx={{
                        width: "150px",
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
                        labelId="month-select-label"
                        value={selectTotalExpense}
                        onChange={handleChangeTotalExpense}
                        input={<OutlinedInput label="" />}
                        renderValue={(selected) => (selected ? selected : "Select Month")} // Placeholder text
                    >
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="30">30</MenuItem>
                    </Select>
                </FormControl>

                {/* Dropdown to filter by month */}
                <FormControl
                    sx={{
                        width: "150px",
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
                        labelId="month-select-label"
                        value={selectedMonth}
                        onChange={handleEarningFilterChange}
                        input={<OutlinedInput label="" />}
                        renderValue={(selected) => (selected ? selected : "Select Month")} // Placeholder text
                    >
                        {/* Dropdown options */}
                        {Object.keys(monthlyData).map((month) => (
                            <MenuItem key={month} value={month}>
                                {month}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            {/* LineChart */}
            {filteredData && (
                <LineChart
                    width={780}
                    height={300}
                    series={[
                        {
                            data: filteredData,
                            label: `${selectedMonth} Earnings`,
                            area: true, // Show the area under the line
                            showMark: false,
                            stack: "total",
                            color: "#bfe7a4", // 20% opacity
                        },
                    ]}
                    slotProps={{
                        legend: { hidden: true },
                       
                    }}
                    yAxis={[
                        {
                            scaleType: "linear", // Use linear scale for numerical data
                            data: yLabels,
                        },
                    ]}
                    xAxis={[
                        {
                            scaleType: "point",
                            data: xLabels,
                        },
                    ]}
                    sx={{
                        width: "100%",
                        margin: "0 auto", // Centers the chart
                        [`& .${lineElementClasses.root}`]: {
                            backgroundColor: "#FF0000", // Red background color for the area element
                        },
                    }}
                />
            )}

           
           
        </div>
    );
};

export default AnalitcsReportChart;
