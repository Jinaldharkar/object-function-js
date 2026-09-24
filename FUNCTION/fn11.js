    // find() → item
    // findIndex() → item's position

let employees = [
    { id: 101, name: "Jinal", salary: 40000 },
    { id: 102, name: "Rahul", salary: 55000 },
    { id: 103, name: "Priya", salary: 70000 }
];

let index = employees.findIndex(function(emp) 
{
    return emp.salary > 50000;
});

console.log(index);