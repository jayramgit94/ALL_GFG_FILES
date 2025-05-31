readlineSync = require('readline-sync');
// Split and join
// Split and join are two methods used to convert a string to an array and vice versa.
const inputdtr =  readlineSync.question("type any string to reverse: ");


// "Jayram sangawat";
const arrOfChar = inputdtr.split("");
arrOfChar.reverse();
const reversedString = arrOfChar.join("");
console.log(reversedString);