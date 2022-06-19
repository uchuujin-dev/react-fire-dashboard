import React, { useState } from "react";
import "./customTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import uuid from "react-uuid";

const CustomTable = () => {
  function createData(id, name, last, change, percentageChange) {
    return { id, name, last, change, percentageChange };
  }

  const rows = [
    createData(uuid(), "S&P 500", 3674.84, 8.07, 24, 0.22),
    createData(uuid(), "UK: FTSE 100", 7016.25, -28.73, -0.41),
    createData(uuid(), "Russell 2000", 1665.69, 15.86, 0.96),
    createData(uuid(), "Japan: Nikkei 225", 25963.0, -468.2, -1.77)
  ];

  const [data, setData] = useState(rows);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell cellTitle">NAME</TableCell>
            <TableCell className="tableCell cellTitle" align="right">
              LAST
            </TableCell>
            <TableCell className="tableCell cellTitle" align="right">
              CHANGE
            </TableCell>
            <TableCell className="tableCell cellTitle" align="right">
              % CHANGE
            </TableCell>
            <TableCell className="tableCell cellTitle" align="right">
              {/* blank for deleting row */}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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
                <button
                  className="deleteRowBtn"
                  onClick={() => handleDelete(row.id)}
                >
                  <RemoveCircleOutlineRoundedIcon className="deleteRowBtnIcon" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
