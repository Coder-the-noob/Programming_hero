const employees = [
    {name: "Moin", age: 25, designation: "Software Engineer", salary: 30000},
    {name: "Sara", age: 30, designation: "Project Manager", salary: 50000},
    {name: "Ali", age: 28, designation: "UX Designer", salary: 40000},
    {name: "John", age: 35, designation: "Data Scientist", salary: 60000}
]

//console.log(employees[2]);

//console.log(employees[1].salary, employees[1].designation);

for(const employee of employees){
    console.log(employee.name, employee.designation, employee.salary);
}