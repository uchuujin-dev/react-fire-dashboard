import React from "react";
import "./customTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

const CustomTable = () => {
  function createData(name, last, change, percentageChange) {
    return { name, last, change, percentageChange };
  }

  const rows = [
    createData("S&P 500", 3674.84, 8.07, 24, 0.22),
    createData("UK: FTSE 100", 7016.25, -28.73, -0.41),
    createData("Russell 2000", 1665.69, 15.86, 0.96),
    createData("Japan: Nikkei 225", 25963.0, -468.2, -1.77)
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell" align="right">
              Last
            </TableCell>
            <TableCell className="tableCell" align="right">
              Change
            </TableCell>
            <TableCell className="tableCell" align="right">
              % change
            </TableCell>
            <TableCell className="tableCell" align="right">
              {/* blank for deleting row */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.last}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.change}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.percentageChange}
              </TableCell>

              <TableCell className="tableCell" align="right">
                <RemoveCircleOutlineRoundedIcon className="deleteRowBtn" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
