// findLast() — Find the last matching object
// find() → first matching item
// findLast() → last matching

let employees = [
    { name: "Jinal", salary: 40000 },
    { name: "Rahul", salary: 55000 },
    { name: "Priya", salary: 70000 },
    { name: "Amit", salary: 60000 }
];

let employee = employees.findLast(function(emp)
 {
    return emp.salary > 50000;
});

console.log(employee);