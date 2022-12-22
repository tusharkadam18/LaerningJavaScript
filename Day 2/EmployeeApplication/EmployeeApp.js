class Employee {
  constructor(id, name, address, salary) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;
  }
}

class EmployeeRepo {
  data = [
    new Employee(101, "Tushar", "Pune", 55000),
    new Employee(102, "Deepak", "Mumbai", 60000),
    new Employee(103, "ShivKumar", "Nanded", 55000),
    new Employee(104, "Lalit", "ProperPune", 95000),
    new Employee(105, "Vedant", "Nashik", 95000),
  ];

  addNewEmployee(emp) {
    this.data.push(emp);
  }

  deleteEmployee(employee) {
    const index = this.data.findIndex((emp) => (emp.id = employee.id));
    if (index < 0) {
      throw `Employee with ${employee.id} is not present in the database.`;
    }
    this.data.splice(index, 1);
  }

  getAllEmployees() {
    return this.data;
  }

  getEmployeeById(id) {
    const index = this.data.findIndex((emp) => emp.id == id);
    if (index < 0) {
      throw `Employee with ${id} is not present in the database.`;
    }
    return this.data[index];
  }
  modifyEmployee(employee) {
    const index = this.data.findIndex((emp) => emp.id == employee.id);
    if (index < 0) {
      throw `Employee with ${id} is not present in the database.`;
    }
    this.data.splice(index, 1, splice)
  }
}
