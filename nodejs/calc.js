//Practical Exercise: CLI Calculator
// Extract arguments starting from index 2
const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// Validation
if (isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calc.js <num1> <operator> <num2>");
    process.exit(1);
}

let result;

// Logic based on operator
switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': 
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero"; 
        break;
    default: 
        console.log("Invalid operator! Use +, -, *, /"); 
        process.exit(1);
}

console.log(`Result: ${result}`);


// node calc.js 15+8
//Node.js Runtime and Core Concepts
//1. Node.js Architecture
//Runtime Environment: Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.

//V8 Engine: It uses the Google V8 engine (written in C++) to compile JavaScript directly into machine code for high performance.

//Single-Threaded: Node.js operates on a single thread but handles multiple tasks simultaneously using the Event Loop.

//Non-blocking I/O: It uses an asynchronous model, meaning it doesn't wait for one task (like reading a file) to finish before starting the next.

//2. The Event Loop
//The Event Loop allows Node.js to perform non-blocking I/O operations.

//It offloads heavy tasks to the system kernel or a thread pool (via the Libuv library) and executes a callback function once the task is complete.

//3. Node.js REPL
//REPL stands for Read-Eval-Print Loop.

//It is a simple interactive shell where you can type JavaScript code and see the results immediately.

//How to use: Open your terminal and type node.

//4. Process Object and CLI Arguments
//The process object is a global object in Node.js that provides information about the current script execution.

//process.argv: An array containing the command-line arguments.

//argv[0]: Path to the Node.js executable.

//argv[1]: Path to the JavaScript file being executed.

//argv[2...]: Actual user-provided arguments.