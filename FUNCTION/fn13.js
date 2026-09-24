// findLastIndex() — Last matching item's index (index of the last matching item)

let employees = [
    { name: "Jinal", salary: 40000 },
    { name: "Rahul", salary: 55000 },
    { name: "Priya", salary: 70000 },
    { name: "Amit", salary: 60000 }
];

let index = employees.findLastIndex(function(emp)
{
    return emp.salary > 50000;
});

console.log(index);