// const readlinesync = require("readline-sync");

// const userage = readlinesync.question("Enter your age: ");


// // const userage = 8;

// if(userage >= 18){
//     console.log('You are an adult');
// }
// else{
//     console.log('You are a minor');
// }





const readlinesync = require("readline-sync");
const number = Number (readlinesync.question("Enter a number: "));

const remainder = number % 3;

if (remainder === 0){
    console.log("fizz");
}