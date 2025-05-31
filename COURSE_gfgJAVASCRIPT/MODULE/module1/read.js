const readlinesync = require("readline-sync");

const name = readlinesync.question("Enter your name: ");
console.log(`Hello, ${name}`);
