const readlineSync = require ("readline-sync");
const number = Number (readlineSync.question("Enter a number: "));

const evenodd = number % 2;
if (evenodd === 0){
    console.log("even");

    if(number % 6 === 0){
        console.log(`${number} is divded by 6`);
    }
    else{
        console.log(`${number} is not divisible by 6`);
    }
}else{
    console.log("odd");
}
