"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Restaurant, DirectionsBus, LocalGasStation, ShoppingCart, Movie, Work, Water } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white, // Header background
        color: "#324C5B", // Custom color for header text
        width: "200px", // Set custom width
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        width: "200px", // Set width for body cells
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function createData(category: string, date: string, amount: number, note: string) {
    return { category, date, note, amount};
}

const rows = [
    createData('Food', '2024-11-01', 120, 'Lunch with friends'),
    createData('Transport', '2024-11-02', 50, 'Bus fare'),
    createData('Utilities', '2024-11-03', 200, 'Electric bill'),
    createData('Shopping', '2024-11-04', 150, 'Clothes'),
    createData('Entertainment', '2024-11-05', 80, 'Movies'),
    createData('Food', '2024-11-06', 100, 'Dinner'),
    createData('Transport', '2024-11-07', 60, 'Taxi'),
    createData('Utilities', '2024-11-08', 300, 'Water bill'),
];

const FilterIncome = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const renderIcon = (category: string) => {
        switch (category) {
            case 'Food':
                return <Restaurant />;
            case 'Transport':
                return <DirectionsBus />;
            case 'Utilities':
                return <LocalGasStation />;
            case 'Shopping':
                return <ShoppingCart />;
            case 'Entertainment':
                return <Movie />;
            case 'Work':
                return <Work />;
            case 'Water bill':
                return <Water />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full flex flex-col gap-4 pt-4">
            <p className="text-[#324C5B] text-[20px] md:text-[32px] font-semibold">
                My Income
            </p>
            <p className="text-[#324C5B] text-[16px] md:text-[20px] font-medium md:font-semibold pt-4">
                Transaction Expense
            </p>

            <div className="bg-[#FFFFFF] p-6 rounded-[10px] shadow-sm">
                <p className="text-[#324C5B] text-[16px] md:text-[18px] font-medium md:font-semibold pt-4">
                    Please Input Your Expense
                </p>

                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Category</StyledTableCell>
                                    <StyledTableCell align="right">Date</StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                    <StyledTableCell align="right">Note</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const absoluteIndex = page * rowsPerPage + index; // Get absolute index
                                        const isWhiteBg = absoluteIndex % 2 === 0; // Alternate background logic

                                        return (
                                            <StyledTableRow
                                                key={index}
                                                className={row.amount > 150 ? 'highlight' : ''}
                                                sx={{
                                                    backgroundColor: isWhiteBg ? "#f8f8f8" : "white", // Alternate row colors
                                                    color: isWhiteBg ? "white" : "#f8f8f8", // Adjust text color for visibility
                                                }}
                                            >
                                                <StyledTableCell component="th" scope="row">
                                                    {renderIcon(row.category)}  {row.category}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                                <StyledTableCell align="right">{row.note}</StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    })}
                            </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
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
export default FilterIncome