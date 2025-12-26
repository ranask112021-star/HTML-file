// 1 Creating  & Manipulating arrays
 let students = ["Suresh","Karan","Ronak","Sneha"];
 console.log(students);

 // push() - add element at last
 students.push("Anjali");

 //Pop() - remove element from last
 students.pop();

 // unshift() - add element at start
 students.unshift("Amit");

 // shift() - remove element from start
 students.shift();

 // splice() - remove element from middle
    students.splice(2,1); // removes 1 element at index 2

 students.splice(1,0,"Vikram"); // adds "Vikram" at index 1

 // 2 Array Iteration Methods
 // map() - transforms array

 let numbers = [1,2,3,4,5];
 let squares = numbers.map(num => num * num);
    console.log(squares); // [1,4,9,16,25]
 // filter() - filters array based on condition
 let even = numbers.filter(num => num % 2 === 0);
 console.log(even); // [2,4]


 //reduce() - accumulator value
 let sum = numbers.reduce((total, num) => total + num, 0);
    console.log(sum); // 15

  // 3 Array Destructuring
  let subjects = ["Math","Science","History"];
  let [sub1, sub2, sub3] = subjects;
  console.log(sub1); // Math
  
  
  // Practice Exercises
  // Students  Grade Management System

  let student = [
    { name: "Suresh", marks: 85 },
    { name: "Karan", marks: 42 },
    { name: "Ronak", marks: 76 },
    { name: "Sneha", marks: 91 },
    { name: "Anjali", marks: 58 }
  ];
  console.log("All Students:", student);

  // Add a new student
  student.push({name: "Pooja", marks: 67});
  student.pop(); // remove added student for consistency

  // filter Passed Students (>=50)

  let passedStudent = student.filter(student => student.marks >=50);
  console.log(passedstudent);

  // 3 Calculate Average Marks
  let totalMarks = student.reduce((sum, student) => sum + student.marks, 0);
  let average = totalMarks / student.length;
    console.log("Average Marks:", average);

 // 4 Highesht & Lowest Marks
 
 let marksArray = student.map(s => s.marks);

 let highest = Math.max(...marksArray);
 let lowest = Math.min(...marksArray);

 console.log("Highest Marks:", highest);
 console.log("Lowest Marks:", lowest);

 //5 Sort Students by Marks (Descending)
 let sortedStudents = [...student].sort((a,b) => b.marks - a.marks);
 console.log(sortedStudents);


 // 6 Destructuring Example
 let [{ name, marks }] = student;
 console.log(name, marks); // Suresh 85
