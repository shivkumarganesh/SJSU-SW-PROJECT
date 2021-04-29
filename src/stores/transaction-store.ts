import { action, observable } from "mobx";
import { Transactions } from "./../models/transactions";

// Mock Data import
import { transactions } from "./../mock-data/transactions";

export class TransactionStore {
  @observable transactions: Transactions[] = [] as Transactions[];

  constructor() {
    const transactions = this.fetchTransactions();
    this.setTransactions(transactions);
  }

  fetchTransactions(id?: string) {
    // Fetch Transactions from the backend by ID or All if ID not present
    if (id) {
      return [transactions[0] as Transactions];
    } else {
      return transactions as Transactions[];
    }
  }

  get allTransactions() {
    return this.transactions;
  }

  @action.bound
  setTransactions(transactionList: Transactions[]) {
    this.transactions = transactionList;
  }
}
