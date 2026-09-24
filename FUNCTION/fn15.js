//every() → Are ALL true?   

let students = [
    { name: "Jinal", marks: 75 },
    { name: "Rahul", marks: 82 },
    { name: "Priya", marks: 68 },
    { name: "Amit", marks: 90 }
];

let everyonePassed = students.every(function(student) 
{
    return student.marks >= 40;
});

console.log(everyonePassed);