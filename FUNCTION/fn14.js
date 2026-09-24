//some() → Is at least ONE true?
let students = [
    { name: "Jinal", marks: 75 },
    { name: "Rahul", marks: 82 },
    { name: "Priya", marks: 38 },
    { name: "Amit", marks: 90 }
];

let hasFailed = students.some(function(student) 
{
    return student.marks < 40;
});

console.log(hasFailed);