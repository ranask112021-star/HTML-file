// server.js
const express = require('express');
const chalk = require('chalk');
const moment = require('moment');

const app = express();

console.log(chalk.blue.bold("\n--- NODE.JS MODULE SYSTEM TEST ---"));

// Logic directly yahan likhte hain
const currentTime = moment().format('LTS');
console.log(chalk.green(`[SUCCESS] Server initialized at: ${currentTime}`));

app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: Arial; text-align: center; padding: 50px;">
            <h1 style="color: #2ecc71;">Module System & Package Management</h1>
            <p><strong>Package 1 (Express):</strong> Server is running!</p>
            <p><strong>Package 2 (Moment):</strong> Date is ${moment().format('LL')}</p>
            <p style="color: #3498db;">Terminal is styled with <strong>Chalk</strong></p>
        </body>
    `);
});

app.listen(3000, () => {
    console.log(chalk.magenta("Visit: http://localhost:3000"));
    console.log(chalk.blue.bold("-----------------------------------\n"));
});