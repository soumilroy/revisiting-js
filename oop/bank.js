/* Emulate Bank Process
 * 1. Create a bank account for user
 * 2. Deposit money to the account
 * 3. Withdraw money from the account
 * 4. Check the balance of the account
 * 5. Check the transaction history of the account
 * 6. Close the account
 */

export class BankAccount {
  constructor(name) {
    if (!name) {
      throw new Error("Name is required to create an account");
    }

    this.id = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.balance = 0;
    this.transactionHistory = [];
  }
}
