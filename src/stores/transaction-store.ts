import { action, observable } from "mobx";
import { Transactions } from "./../models/transactions";

// Mock Data import
import { transactions } from "./../mock-data/transactions";

export class TransactionStore {
  @observable transactions: Transactions[] = [];

  constructor() {
    const transactions = this.fetchTransactions();
    this.setTransactions(transactions);
  }

  fetchTransactions() {
    return transactions;
  }

  get allTransactions() {
    return this.transactions;
  }

  @action.bound
  setTransactions(transactionList: Transactions[]) {
    this.transactions = transactionList;
  }
}
