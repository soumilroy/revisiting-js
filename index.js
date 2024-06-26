import { BankAccount } from "./oop/bank.js";
import { Customer } from "./oop/static.js";
import { Circle } from "./oop/circle.js";
import { Student, MyClass } from "./oop/private.js";

const account = new BankAccount("John Doe");

console.log(account);

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

new Customer("John Doe", 30);
new Customer("Jane Doe", 28);
new Customer("Alice", 32);
new Customer("Bob", 25);
new Customer("Charlie", 35);

Customer.showCustomers();

console.log(Customer.getTotalCustomers());

new Circle(10, "blue");

Circle.radius = 12;
console.log(Circle.radius);

const student = new Student("John Doe", 10, "M", 5);

console.log(student);

console.log(student.gender); // undefined because it's private

console.log(student.name); // John Doe
console.log(student.age); // 10
// console.log(student.#pvtMethod()); // Cannot access private method

student.showPvtMethod(); // This calls the private method inside the class from a public method

new MyClass();
