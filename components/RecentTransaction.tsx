"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Chip,
  TablePagination,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import IconClock from "@/public/icons/clock";
import SearchIcon from "@mui/icons-material/Search";

interface Data {
  id: number;
  transactionId: string;
  dateTime: string;
  amount: number;
  status: string;
}

const rows: Data[] = [
  {
    id: 1,
    transactionId: "Payment from Bonnie Green",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Completed",
  },
  {
    id: 2,
    transactionId: "Payment refund to #00910",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Cancelled",
  },
  {
    id: 3,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 4,
    transactionId: "Payment from Bonnie Green",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Completed",
  },
  {
    id: 5,
    transactionId: "Payment refund to #00910",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Cancelled",
  },
  {
    id: 6,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 7,
    transactionId: "Payment from Bonnie Green",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Completed",
  },
  {
    id: 8,
    transactionId: "Payment refund to #00910",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Cancelled",
  },
  {
    id: 9,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 10,
    transactionId: "Payment from Bonnie Green",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Completed",
  },
  {
    id: 11,
    transactionId: "Payment refund to #00910",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "Cancelled",
  },
  {
    id: 12,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 13,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 14,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 15,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
];

const CheckboxTable: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const isSelected = (id: number) => selected.includes(id);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id: number) => {
    const currentIndex = selected.indexOf(id);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(id);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelected(newSelected);
  };

  const handlePageChange = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const filterRows = () => {
    const now = new Date();
    let filteredRows = [...rows];

    // Apply date filters
    if (filter === "last30days") {
      const last30Days = new Date();
      last30Days.setDate(now.getDate() - 30);
      filteredRows = filteredRows.filter(
        (row) => new Date(row.dateTime) >= last30Days
      );
    } else if (filter === "thisweek") {
      const startOfWeek = new Date();
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date();
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      filteredRows = filteredRows.filter((row) => {
        const rowDate = new Date(row.dateTime);
        return rowDate >= startOfWeek && rowDate <= endOfWeek;
      });
    } else if (filter === "thismonth") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredRows = filteredRows.filter(
        (row) => new Date(row.dateTime) >= startOfMonth
      );
    }

    // Apply search filter
    if (searchQuery) {
      filteredRows = filteredRows.filter((row) =>
        row.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredRows;
  };

  const displayedRows = filterRows();
  const paginatedRows = displayedRows.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <div className="flex justify-between gap-5 p-4">
        <FormControl className="hidden md:flex" size="small">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Filter"
            className="!text-sm !border-gray-300  !rounded-lg"
            sx={{
              minWidth: 200,
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "10px",
                "& fieldset": {
                  borderColor: "#E1E9EE", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#6DB33F", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#6DB33F", // Border color when focused
                },
              },
              "& .MuiInputBase-input": {
                fontSize: "12px", // Font size for the input text
              },
            }}
          >
            <MenuItem value="all">
              <div className="flex justify-start items-center gap-4">
                <IconClock />
                Last 30 Days
              </div>
            </MenuItem>
            <MenuItem value="thisweek">
              <div className="flex justify-start items-center gap-4">
                <IconClock />
                This Week
              </div>
            </MenuItem>
            <MenuItem value="thismonth">
              <div className="flex justify-start items-center gap-4">
                <IconClock />
                This Month
              </div>
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          size="small"
          label=""
          variant="outlined"
          className="!text-sm !border-gray-300 !rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            // Customize the input element's styles
          }}
          sx={{
            minWidth: 300,

            // Additional styling for the TextField container if needed
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "10px", // Border radius for the overall input
            },
            "& .MuiInputBase-input": {
              fontSize: "12px", // Placeholder and input text size
            },
            "& .MuiInputLabel-root": {
              fontSize: "12px", // Label font size
            },
          }}
        />
      </div>

      <TableContainer className="!bg-[#F9FAFB]">
        <Table>
          <TableHead className="!border-b-[2px] !border-[#6DB33F]">
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < rows.length
                  }
                  checked={selected.length === rows.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell>
                <p className="!text-[#6B7280] !text-[14px] !font-semibold">
                  TRANSACTION
                </p>
              </TableCell>
              <TableCell>
                {" "}
                <p className="!text-[#6B7280] !text-[14px] !font-semibold">
                  DATE & TIME
                </p>
              </TableCell>
              <TableCell>
                {" "}
                <p className="!text-[#6B7280] !text-[14px] !font-semibold">
                  AMOUNT
                </p>
              </TableCell>
              <TableCell>
                <p className="!text-[#6B7280] !text-[14px] !font-semibold">
                  STATUS
                </p>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => handleClick(row.id)}
                role="checkbox"
                selected={isSelected(row.id)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox color="primary" checked={isSelected(row.id)} />
                </TableCell>
                <TableCell>
                  {" "}
                  <p className="!text-[#111928] !line-clamp-1 !text-[14px] !font-normal">
                    {row.transactionId}
                  </p>
                </TableCell>
                <TableCell>
                  {" "}
                  <p className="!text-[#6B7280]  !line-clamp-1 !text-[14px]  !font-normal">
                    {row.dateTime}
                  </p>
                </TableCell>
                <TableCell>
                  {" "}
                  <p className="!text-[#6D7D93]  !line-clamp-1 !text-[14px] !font-normal">{`$${row.amount.toFixed(
                    2
                  )}`}</p>
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={row.status}
                    className={`!rounded-[5px] !font-medium !text-[12px] ${
                      row.status === "Completed"
                        ? "!bg-[#DEF7EC] !text-[#03543F]"
                        : row.status === "Cancelled"
                        ? "!bg-[#FDE8E8] !text-[#9B1C1C]"
                        : "!bg-[#EDEBFE] !text-[#5521B5]"
                    }`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={displayedRows.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>
  );
};

export default CheckboxTable;
