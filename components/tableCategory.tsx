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
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import IconCategoryTale from "@/public/icons/tableCategory"

interface RowData {
  icon: React.ReactNode; // Icon component
  name: string; // Row name
}

const data: RowData[] = [
  {
    icon: <IconCategoryTale style={{ color: "white" }} />,
    name: "Transport"
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
            <TableRow
              key={index}
            >
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
