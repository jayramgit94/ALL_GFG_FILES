// console.log("it was executed successfully! :)");

// //greet fn 
// function greet(){
//     console.log("Hello, World!");
// }

// setTimeout(greet, 2000);
// console.log("Hello, World!");


//set interval

// let value = 0;
// let intervalId = null;

// function cousnting(){
//     value = value + 1;
//     console.log({value});
//     if(value === 10){
//         clearInterval(intervalId);
//     }
// }

// intervalId = setInterval(cousnting, 100);


let counter = 0;
const intervalId = setInterval(() => { 
 counter++;  
console.log(`counter:${counter}`);
 if (counter === 5)
 {    
clearInterval(intervalId); }
 }, 1000);