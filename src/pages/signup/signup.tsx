import { Button } from "@material-ui/core";
import React from "react";
import { UserStore } from "../../stores/user-store";

export default function Signup() {
  const userStore = new UserStore();
  return (
    <Button
      onClick={() => {
        userStore.setUserAuth(true);
      }}
    >
      Login
    </Button>
  );
}
