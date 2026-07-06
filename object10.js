let employee = {
    name: "Rahul",
    salary: 50000,
    department: "IT"
};
console.log(employee.name);
employee.salary += 5000;
employee.city="chennai";
delete employee.department;
console.log(employee);