const name = "Alex";
const age = 25;

// Old way (Concatenation)
console.log("My name is " + name + " and I am " + age + ".");

// Modern way (Template Literals)
console.log(`My name is ${name} and I am ${age}.`);




// 1. Variable Declarations
const username = "Coder123"; 
let score = 0;
score = 10; // let allows re-assignment

// 2. Primitive Data Types
const message = "Level 1";      // String
const points = 50.5;            // Number
const isGameOver = false;       // Boolean
const trophy = null;            // Null (Empty)
let nextLevel;                  // Undefined

// 3. Template Literals
const statusReport = `User ${username} has a score of ${score} on ${message}.`;
console.log(statusReport);

// 4. Type Coercion Example
console.log("Total: " + (score + "5")); // Result: "Total: 105"


