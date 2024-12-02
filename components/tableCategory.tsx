"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import IconCategoryTale from "@/public/icons/categoryTable";

interface RowData {
  icon: React.ReactNode; // Icon component
  name: string; // Row name style={{ color: "white" }}
}

const data: RowData[] = [
  {
    icon: <IconCategoryTale  />,
    name: "Transport",
  },
];

const TableCategory = () => {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead className="!bg-[#F5F5F5]">
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Iconss</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {row.icon}
                </div>
              </TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCategory;
