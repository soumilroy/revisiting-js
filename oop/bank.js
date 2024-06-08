/* Emulate Bank Process
 * 1. Create a bank account for user
 * 2. Deposit money to the account
 * 3. Withdraw money from the account
 * 4. Check the balance of the account
 * 5. Check the transaction history of the account
 * 6. Close the account
 */

export class BankAccount {
  // constructor used for validating and assigning properties
  constructor(name) {
    if (!name) {
      throw new Error("Name is required to create an account");
    }

    this.accountNumber = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.balance = 0;
    this.transactionHistory = [];
    this.currency = "INR";
    this.currencySymbol = "₹";
  }

  getCurrentBalance() {
    return this.balance;
  }

  updateName(name) {
    this.name = name;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Invalid amount to deposit. Please try again.");
    }

    this.balance += amount;
    this.transactionHistory.push({
      transactionId: Math.floor(Math.random() * 100),
      type: "credit",
      amount: amount,
      currency: this.currency,
      currencySymbol: this.currencySymbol,
      date: new Date()
    });
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Invalid amount to withdraw. Please try again.");
      return;
    }

    if (this.balance < amount) {
      console.log("Insufficient balance. Please try again.");
      return;
    }

    this.balance -= amount;

    this.transactionHistory.push({
      transactionId: Math.floor(Math.random() * 100),
      type: "debit",
      amount: amount,
      currency: this.currency,
      currencySymbol: this.currencySymbol,
      date: new Date()
    });
  }

  showTransactionHistory() {
    if (!this.transactionHistory.length) {
      console.log("No transactions found.");
      return;
    }

    console.table(this.transactionHistory);
  }
}
