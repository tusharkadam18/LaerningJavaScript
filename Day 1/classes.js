// There are 3 types of class declaration in the js
// First The singleton class declaration
// -----------------singleton-----------------------------
const student = {}
student.id = 59
student.name = "Tushar Kadam"
student.course = "DAC"
student.address = "Pune";
student.getData = function(){
    for (const key in student) {
        console.log(student[key]);
    }
}
student.getData()

// -----------------OldWay of Declaring the Class-----------
const Employee = function(id, name, address, salary) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.salary = salary;

    this.getData = function(){
        console.log(`The Name of Employee is ${name} with address ${address}`)
    }
}
const emp1 = new Employee(123, "Tushar Kadam", "Pune", 80000)
emp1.getData()

// -----------------New Declaration java type declaration----
class Customer{
    constructor() {
        this.id = 0;
        this.name = ""
        this.address = ""
        this.bill = 0;
    }
    addItemToBill(amount){
        this.bill = this.bill + amount;
    }
    showBill(){
        console.log(`The Total Bill Of the customer with name ${this.name} is : Rs. ${this.bill}`)
    }
}
let cust1 = new Customer();
cust1.id = 1236;
cust1.name = 'Deepak'
cust1.address = 'Nanded'
cust1.bill = 1000;
cust1.addItemToBill(1350)
cust1.showBill();
