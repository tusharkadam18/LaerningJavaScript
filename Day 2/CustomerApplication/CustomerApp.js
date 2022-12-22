class Customer {
  constructor(id, name, address, billAmount) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.billAmount = billAmount;
  }
}
class CustomerRepo {
  data = [
    new Customer(001, "Tushar", "Barshi", 500),
    new Customer(002, "Shivkumar", "Nanded", 500),
    new Customer(003, "Lalit", "Pune", 100),
    new Customer(004, "Vedant", "Nashik", 50),
    new Customer(005, "Deepak", "Kallam", 1000),
  ];

  getCutomerById(id) {
    const index = this.data.findIndex((cust) => cust.id == id);
    if (index < 0) {
      throw `Customer with given id = ${id} is not present in the stores database`;
    }
    return this.data[index];
  }

  getAllCustomers() {
    return this.data;
  }

  addNewCustomer(cust) {
    this.data.push(cust);
  }

  deleteCustomerById(id) {
    const index = this.data.findIndex((cust) => cust.id == id);
    if (index < 0) {
      throw `Customer with given id = ${id} is not present in the store's database`;
    }
    this.data.splice(index, 1);
  }

  modifyCustomerData(modifiedCust) {
    const cust = this.data.findIndex((cust) => cust.id == modifiedCust.id);
    if (index < 0) {
      throw `Customer with given id = ${id} is not present in the stores database`;
    }
    this.data.splice(index, 1, modifiedCust);
  }

  clearBill(id, billAmount) {
    const index = this.data.findIndex((cust) => id == cust.id);
    if (index < 0) {
      throw `Customer with given id = ${id} is not present in the stores database`;
    }
    this.data[index].billAmount = this.data[index].billAmount - billAmount;
  }

  addProductValueByCustomer(customer, value) {
    const index = this.data.findIndex((cust) => customer.id == cust.id);
    if (index < 0) {
      this.addNewCustomer(customer);
    }
    this.data[index].billAmount = parseInt(this.data[index].billAmount) + parseInt(value);
    return this.data[index].billAmount
  }
}
