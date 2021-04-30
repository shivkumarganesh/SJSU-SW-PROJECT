import { Button } from "@material-ui/core";
import React from "react";
import { UserStore } from "../../stores/user-store";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const userStore = new UserStore();
  return (
    <>
      {JSON.stringify(userStore.isUserAuthenticated)}
      <Button
        onClick={() => {
          userStore.setUserAuth(true);
        }}
      >
        Login
      </Button>
    </>
  );
});

export default Login;
