import { BankAccount } from "./oop/bank.js";

const account = new BankAccount("John Doe");

// console.log(account);

const currentBalance = account.getCurrentBalance();

console.log(`Current balance: ${currentBalance}`);

account.showTransactionHistory();

account.deposit(4000);

account.showTransactionHistory();

account.withdraw(1000);

account.showTransactionHistory();

console.log(`Current balance: ${account.getCurrentBalance()}`);

account.withdraw(1390);

account.showTransactionHistory();
console.log(`Current balance: ${account.getCurrentBalance()}`);
