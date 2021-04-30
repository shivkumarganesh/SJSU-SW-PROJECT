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
import PrivateRoute from "./components/private-route/private-route";
import Signup from "./pages/signup/signup";

import { makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import { UserStore } from "./stores/user-store";
import { observer } from "mobx-react-lite";

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

const App = observer(() => {
  const classes = useStyles();
  const userStore = new UserStore();

  return (
    <div className="App">
      <MiniDrawer appName="Musketeer's Bank">
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} />
          <PrivateRoute
            path="/dashboard"
            component={Dashbaord}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
          <PrivateRoute
            path="/accounts"
            component={Accounts}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
          <PrivateRoute
            path="/transactions"
            component={Transactions}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
          <PrivateRoute
            path="/cards"
            component={Cards}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
          <PrivateRoute
            path="/search"
            component={UserSearch}
            exact
            isLoggedIn={userStore.isUserAuthenticated}
          />
        </main>
      </MiniDrawer>
    </div>
  );
});

export default App;
