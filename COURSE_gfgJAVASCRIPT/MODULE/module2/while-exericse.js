let readlineSync = require("readline-sync");

let number = readlineSync.question("Enter the number less then 50 -: ");
while (number >= 50) {
  number = readlineSync.question("enter a number less hten 50 -");
}
console.log("number accepted is ", number);
