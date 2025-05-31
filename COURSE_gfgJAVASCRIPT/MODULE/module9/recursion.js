// a function is called from itself - till the condtion is true
// more elegent way to write a code

// function claculateSumRecursive(number) {
//   if (number === 1) {// base condition must add for stopping recursion on 1 other wise it goes all the way
//     return number;
//   }
//   {
//     return number + claculateSumRecursive(number - 1);
//   }
// }

// const total = 10 +claculateSumRecursive(9);//same as claculateSumRecursive(10);
// console.log(total);
// //10 + 9+8+7+6+5+4+3+2+1




// function calculatesum(number){
    //     let total = 0;
    //     for(let i = 1; i<= 7;i++){
        //         total = total + i;
        
        //     }
// return total;
// }
// const result= calculatesum(7);
// console.log(result);






function factorial (number){
    if(number === 1){
        return number;
    }
    return number * factorial(number -1);
}

const total = factorial (5);
console.log(total);


// function fact(number){
//     let total = 1;
//     for(let i = number; i>=1; i--){
//         return i *= i;
//     }
//     return fact ;

// }
// const out = fact(5);
// console.log(out);
