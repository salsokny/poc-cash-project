"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 21.4, label: "A", color: "#A7D18C" }, // Green
  { value: 78.6, label: "B", color: "#6DB33F" }, // Red
];

const size = {
  width: 300,
  height: 200,
};

// Styled background for the percentage label
const StyledBackground = styled("rect")(({ theme }) => ({
  fill: theme.palette.background.paper, // Light background
  rx: 5, // Rounded corners
  ry: 5,
  padding: "5px", // Padding around the text
}));

// Styled text for the label
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ percentage }: { percentage: string }) {
  const { width, height, left, top } = useDrawingArea();
  const textWidth = 70; // Approximate width for the label background
  const textHeight = 30; // Approximate height for the label background

  return (
    <>
      {/* Background for the label */}
      <StyledBackground
        x={left + width / 2 - textWidth / 2}
        y={top + height / 2 - textHeight / 2}
        width={textWidth}
        height={textHeight}
      />
      {/* The label with percentage */}
      <StyledText x={left + width / 2} y={top + height / 2}>
        {percentage}
      </StyledText>
    </>
  );
}

const PieChartWithCenterLabel = () => {
  // Calculate total value
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  // Example: Show the percentage of the second segment (label 'B')
  const percentage = ((data[1].value / totalValue) * 100).toFixed(1) + "%"; // For label 'B'

  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 65,
        },
      ]}
      {...size}
      slotProps={{
        legend: { hidden: true },
      }}
    >
      <PieCenterLabel percentage={percentage} />
    </PieChart>
  );
};

export default PieChartWithCenterLabel;
