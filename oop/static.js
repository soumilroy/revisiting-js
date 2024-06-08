/* Create a class called Customer and using static properties and methods
	1. Create customer with name and age
	2. Get the total number of customers
	3. Get the total number of customers by age group
	4. Authenticate the customer
	5. Get the customer details
	6. Update the customer details
	7. Delete the customer
 */

export class Customer {
  static customers = [];

  constructor(name, age) {
    if (!name) {
      throw new Error("Name is required to create a customer");
    }

    this.name = name;
    this.age = age;
    this.customerId = Math.floor(Math.random() * 1000000);
    Customer.customers.push(this);
  }

  static getTotalCustomers() {
    return Customer.customers.length;
  }

  static getTotalCustomersByAgeGroup(age) {
    return Customer.customers.filter((customer) => customer.age === age).length;
  }

  static authenticateCustomer(customerId) {
    return Customer.customers.find(
      (customer) => customer.customerId === customerId
    );
  }

  static getCustomerDetails(customerId) {
    return Customer.customers.find(
      (customer) => customer.customerId === customerId
    );
  }

  static updateCustomerDetails(customerId, name, age) {
    const customer = Customer.customers.find(
      (customer) => customer.customerId === customerId
    );
    customer.name = name;
    customer.age = age;
  }

  static deleteCustomer(customerId) {
    Customer.customers = Customer.customers.filter(
      (customer) => customer.customerId !== customerId
    );
  }

  static showCustomers() {
    console.table(Customer.customers);
  }
}
