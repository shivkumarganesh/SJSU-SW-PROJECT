import React from "react";
import "./styles.css";
import MiniDrawer from "./components/side-menu/side-menu";
import UserSearch from "./pages/user-search/user-search";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Transactions from "./pages/transactions/transactions";
import Dashbaord from "./pages/dashboard/dashboard";
import Accounts from "./pages/accounts/accounts";
import Cards from "./pages/cards/cards";

import { makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(9)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <MiniDrawer appName="Musketeer's Bank">
        <main className={classes.content}>
          <Route path="/dashboard">
            <div className={classes.toolbar} />
            <Dashbaord />
          </Route>
          <Route path="/accounts">
            <div className={classes.toolbar} />
            <Accounts />
          </Route>
          <Route path="/profile">
            <div className={classes.toolbar} />
            <Profile />
          </Route>
          <Route path="/transactions">
            <div className={classes.toolbar} />
            <Transactions />
          </Route>
          <Route path="/cards">
            <div className={classes.toolbar} />
            <Cards />
          </Route>

          {/* Alternate Routes */}
          <Route path="/login">
            <div className={classes.toolbar} />
            <Login />
          </Route>
          <Route path="/search">
            <div className={classes.toolbar} />
            <UserSearch />
          </Route>
        </main>
      </MiniDrawer>
    </div>
  );
}
