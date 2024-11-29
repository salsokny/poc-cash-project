import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";

const data = [
  { label: "Group A", value: 60, color: "#6DB33F" },
  { label: "Group B", value: 40, color: "#6DB33F4D" },
];

// Styled text for the label
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 10,
}));


function PieCenterLabel({ percentage }: { percentage: string }) {
  const { width, height, left, top } = useDrawingArea();

  return (
    <>
      {/* The label with percentage */}
      <StyledText x={left + width / 2} y={top + height / 2}>
        {percentage}
      </StyledText>
    </>
  );
}


export default function PieChartWithPaddingAngle() {
  // Calculate total value
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  // Example: Show the percentage of the second segment (label 'B')
  const percentage = ((data[0].value / totalValue) * 100).toFixed(1) + "%"; // For label 'B'
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 30,
            outerRadius: 20,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={80}
        height={80}
        legend={{ hidden: true }}
        tooltip={false}
      >
        <PieCenterLabel percentage={percentage} />
      </PieChart>
    </Stack>
  );
}
