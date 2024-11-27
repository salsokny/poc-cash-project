"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import IconSalary from "@/public/icons/salary";
import IconBusiness from "@/public/icons/business";
import IconGift from "@/public/icons/gift";
import IconExtra from "@/public/icons/extra";
import IconLoan from "@/public/icons/loan";
import IconParental from "@/public/icons/parental";
import IconInsurance from "@/public/icons/insurance";
import IconAdjustment from "@/public/icons/adjustment";
import { FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import IconsDelete from "@/public/icons/delete";
import IconEdit from "@/public/icons/edit";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white, // Header background
    color: "#324C5B", // Custom color for header text
    width: "200px", // Set custom width
    // textAlign: "center", // Center the text horizontally
    // verticalAlign: "middle", // Center the text vertically
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: "200px", // Set width for body cells
  },
}));

const StyledTableRow = styled(TableRow)(({}) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  category: string,
  date: string,
  note: string,
  amount: number
) {
  return { category, date, note, amount };
}

const rows = [
  createData("Salary", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Business", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Gifts", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Extra Income", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Loan", "03 June 2022 ", "Here is my income", 50000000000),
  createData(
    "Parental Leave",
    "03 June 2022 ",
    "Here is my income",
    50000000000
  ),
  createData(
    "Insurance Payout",
    "03 June 2022 ",
    "Here is my income",
    50000000000
  ),
  createData("Adjustment", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Salary", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Business", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Gifts", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Extra Income", "03 June 2022 ", "Here is my income", 50000000000),
  createData("Loan", "03 June 2022 ", "Here is my income", 50000000000),
  createData(
    "Parental Leave",
    "03 June 2022 ",
    "Here is my income",
    50000000000
  ),
  createData(
    "Insurance Payout",
    "03 June 2022 ",
    "Here is my income",
    50000000000
  ),
  createData("Adjustment", "03 June 2022 ", "Here is my income", 50000000000),
];

const ExpensePage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const renderIcon = (category: string) => {
    switch (category) {
      case "Salary":
        return <IconSalary />;
      case "Business":
        return <IconBusiness />;
      case "Gifts":
        return <IconGift />;
      case "Extra Income":
        return <IconExtra />;
      case "Loan":
        return <IconLoan />;
      case "Parental Leave":
        return <IconParental />;
      case "Insurance Payout":
        return <IconInsurance />;
      case "Adjustment":
        return <IconAdjustment />;
      default:
        return null;
    }
  };

  const [category, setCategory] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-[40px]">
      <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
       Filter Expense
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-[10px] md:mb-[20px] pt-[4px] md:pt-[10px] ">
        <div className="flex flex-col">
          <p className="block text-[#324C5B] text-sm font-medium mb-2">
          Choose Category
          </p>
          <FormControl
            sx={{
              width: { xs: "100%", sm: "300px" }, // Full width on small screens, 220px on larger screens
              "& .MuiOutlinedInput-root": {
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
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              value={category}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Gifts">Gifts</MenuItem>
              <MenuItem value="Extra Income">Extra Income</MenuItem>
              <MenuItem value="Loan">Loan</MenuItem>
              <MenuItem value="Parental Leave">Parental Leave</MenuItem>
              <MenuItem value="Insurance Payout">Insurance Payout</MenuItem>
              <MenuItem value="Adjustment">Adjustment</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="bg-[#FFFFFF] !rounded-[10px] shadow-sm">
        <Paper
          sx={{ width: "100%", overflow: "hidden" }}
          className="!rounded-[10px]"
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Category</StyledTableCell>
                  <StyledTableCell align="center" sx={{ textAlign: "center" }}>
                    Date
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ textAlign: "center" }}>
                    Note
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ textAlign: "center" }}>
                    Amount
                  </StyledTableCell>

                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .filter((row) => {
                    return (
                      category === "" ||
                      category === "all" ||
                      row.category === category
                    );
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const absoluteIndex = page * rowsPerPage + index; // Get absolute index
                    const isWhiteBg = absoluteIndex % 2 === 0; // Alternate background logic

                    return (
                      <StyledTableRow
                        key={index}
                        className={row.amount > 150 ? "highlight" : ""}
                        sx={{
                          backgroundColor: isWhiteBg ? "#f8f8f8" : "white", // Alternate row colors
                          color: isWhiteBg ? "white" : "#f8f8f8", // Adjust text color for visibility
                        }}
                      >
                        <StyledTableCell component="th" scope="row">
                          <div className="flex justify-start gap-3 items-center">
                            {renderIcon(row.category)}
                            <p
                              className={`!line-clamp-1 ${
                                row.category === "Salary"
                                  ? "!text-[#019267]"
                                  : row.category === "Business"
                                  ? "!text-[#F8B400]"
                                  : row.category === "Gifts"
                                  ? "!text-[#FE218B]"
                                  : row.category === "Extra Income"
                                  ? "!text-[#5FD068]"
                                  : row.category === "Loan"
                                  ? "!text-[#EB5353]"
                                  : row.category === "Parental Leave"
                                  ? "!text-[#006E7F]"
                                  : row.category === "Insurance Payout"
                                  ? "!text-[#4D96FF]"
                                  : row.category === "Adjustment"
                                  ? "!text-[#A97155]"
                                  : ""
                              }`}
                            >
                              {row.category}
                            </p>
                          </div>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <p className="!text-[#93A1AA] !line-clamp-1">
                            {row.date}
                          </p>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <p className="!text-[#93A1AA] !line-clamp-1">
                            {row.note}
                          </p>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <p className="!text-[#6DB33F]">
                            $ {`+` + formatNumber(row.amount)}
                          </p>
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          <div className="flex justify-center gap-2">
                            <IconButton aria-label="delete">
                              <IconsDelete />
                            </IconButton>
                            <IconButton aria-label="delete">
                              <IconEdit />
                            </IconButton>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};
export default ExpensePage;
