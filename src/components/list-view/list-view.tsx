import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("John Doe", 1599868, "Santa Clara, CA", "GREEN", "84.0 USD"),
  createData("Craiz Zarr", 7675237, "Cupertino, CA", "GREEN", "4.3 USD"),
  createData("Potter Ji", 2876562, "East Ridge, OK", "GREEN", "665.0 USD"),
  createData("Creg Dan", 3075655, "Santa Clara, CA", "GREEN", "487.3 USD"),
  createData(
    "Android Gingerbread",
    7576356,
    "Santa Clara, CA",
    "GREEN",
    "300.9 USD"
  )
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

interface ListViewI {
  columnNames: string[];
  data: any;
}
export default function ListView(props: ListViewI) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.columnNames &&
              props.columnNames.map((name: string, index) => {
                return index === 0 ? (
                  <StyledTableCell>{name}</StyledTableCell>
                ) : (
                  <StyledTableCell align="right">{name}</StyledTableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
