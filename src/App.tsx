import React from "react";
import "./styles.css";
import MiniDrawer from "./components/side-menu/side-menu";
import UserSearch from "./pages/user-search/user-search";
import { makeStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

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
          <Switch>
            <Route path="/search">
              <div className={classes.toolbar} />
              <UserSearch />
            </Route>
            <Route path="/">
              <div className={classes.toolbar} />
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Route>
          </Switch>
        </main>
      </MiniDrawer>
    </div>
  );
}
