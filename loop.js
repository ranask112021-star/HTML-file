// ===== Multiplication Tables using for loop =====
console.log("=== Multiplication Tables using for loop ===");

for (let i = 1; i <= 10; i++) {
    console.log(`\nMultiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// ===== Multiplication Tables using while loop =====

console.log("\n=== Multiplication Tables using while loop ===");

let i = 1;
while (i <= 10) {
    console.log(`\nMultiplication Table for ${i}`);
    let j = 1;
    while (j <= 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}


// ===== Multiplication Tables using do-while loop =====
console.log("\n=== Multiplication Tables using do-while loop ===");

let m = 1;
do {
    console.log(`\nMultiplication Table for ${m}`);
    let n = 1;
    do {
        console.log(`${m} x ${n} = ${m * n}`);
        n++;
    } while (n <= 10);
    m++;
} while (m <= 10);


// ===== Multiplication Tables with break & continue =====
console.log("\n=== Multiplication Tables with break & continue ===");

for (let i = 1; i <= 10; i++) {
    console.log(`\nMultiplication Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        if (j === 5) {
            console.log("Skipping 5"); // skip multiplier 5
            continue;
        }
        if (j === 8) {
            console.log("Stopping at 8"); // break after multiplier 7
            break;
        }
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


// ===== Multiplication Tables using for...of loop =====

console.log("\n=== Multiplication Tables using for...of loop ===");

const tables = [1,2,3,4,5,6,7,8,9,10];

for (const i of tables) {
    console.log(`\nMultiplication Table for ${i}`);
    for (const j of tables) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
