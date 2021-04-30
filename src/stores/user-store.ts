import { action, observable } from "mobx";
import { User } from "./../models/user";

export class UserStore {
  @observable userList: User[] = [];
  @observable isAuthenticated: boolean = true;

  fetchUsers(id?: number) {
    // Get the list of all the users or single user
  }

  get usersList() {
    return this.userList;
  }

  get isUserAuthenticated() {
    return this.isAuthenticated;
  }

  @action.bound
  setUserAuth(userAuth: boolean) {
    console.log("LOLLLL");
    this.isAuthenticated = userAuth;
  }

  @action.bound
  setUserList(userList: User[]) {
    this.userList = userList;
  }
}
