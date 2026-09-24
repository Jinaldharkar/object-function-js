// find() — Find the first matching object
let employees = [
    { name: "Jinal", salary: 40000 },
    { name: "Rahul", salary: 55000 },
    { name: "Priya", salary: 70000 },
];

let employee = employees.find(function(emp)
     {
    return emp.salary > 50000;
});

console.log(employee);