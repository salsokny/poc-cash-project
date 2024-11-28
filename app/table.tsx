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
  Button,
} from "@mui/material";

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
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 11,
    transactionId: "Payment failed from #087651",
    dateTime: "Apr 23 ,2021",
    amount: 2300,
    status: "In progress",
  },
  {
    id: 12,
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
  const [showThisWeek, setShowThisWeek] = useState(false);

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

  const filterThisWeek = () => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date();
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return rows.filter((row) => {
      const rowDate = new Date(row.dateTime);
      return rowDate >= startOfWeek && rowDate <= endOfWeek;
    });
  };

  const displayedRows = showThisWeek ? filterThisWeek() : rows;

  const paginatedRows = displayedRows.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <Button
        variant="outlined"
        onClick={() => setShowThisWeek((prev) => !prev)}
        sx={{ margin: 2 }}
      >
        {showThisWeek ? "Show All Transactions" : "Filter This Week"}
      </Button>
      <TableContainer>
        <Table>
          <TableHead className="border-b-[2px] border-[#6DB33F]">
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
                  <p className="!text-[#111928] !text-[14px] !font-normal">
                    {row.transactionId}
                  </p>
                </TableCell>
                <TableCell>
                  {" "}
                  <p className="!text-[#6B7280] !text-[14px]  !font-normal">
                    {row.dateTime}
                  </p>
                </TableCell>
                <TableCell>
                  {" "}
                  <p className="!text-[#6D7D93] !text-[14px] !font-normal">{`$${row.amount.toFixed(
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
