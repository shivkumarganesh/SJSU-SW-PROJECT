import {
  Button,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "70vh",
    marginTop: "30px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "30px"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50vh",
      padding: 0
    }
  }
}));

export default function Signup() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography variant="h5" component="p" align="left">
        Signup Form
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="First Name" />
        <TextField id="filled-basic" label="Last Name" />
        <TextField id="outlined-basic" label="Age" />
        <TextField id="outlined-basic" label="Date of Birth" />
        <TextField id="outlined-basic" label="Email" />
        <TextField id="outlined-basic" label="Password" />
        <TextField id="outlined-basic" label="Condirm Password" />
        <TextField id="outlined-basic" label="Last 4 digit of SSN" />
        <Select label="Acount Type">
          <MenuItem value={1} alignItems="flex-start">
            Savings
          </MenuItem>
          <MenuItem value={2} alignItems="flex-start">
            Checking
          </MenuItem>
          <MenuItem value={2} alignItems="flex-start">
            Both
          </MenuItem>
        </Select>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </form>
    </Paper>
  );
}
