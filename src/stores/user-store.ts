import { action, observable } from "mobx";
import { User } from "./../models/user";

export class UserStore {
  @observable userList: User[] = [];

  fetchUsers(id?: number) {
    // Get the list of all the users or single user
  }

  get usersList() {
    return this.userList;
  }
  @action.bound
  setUserList(userList: User[]) {
    this.userList = userList;
  }
}
