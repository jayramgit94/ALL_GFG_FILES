// // let sum = 0;

// function summ(n){
//     let sum = 0;
//     for(let i = 1; i <= n ; i++){
//         for(let j = 1; j <= i ; j++){
//             sum++;
//         }
//     }
//     return sum;
// }

// console.log(summ(90000000));  // sabse jyada time le rha he






function fromula(n){
    return n*(n+1)/2;
}

console.log(fromula(90000000));// 0.8 seconds only sabhi me 





// function oneloops(n){
//     let sum = 0;
//     for(let i = 1; i <= n ; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(oneloops(90000000));// taking more time then formula but less time then the 2 for loops 


// java and python are intermediate code which is interpreted line by line so they are slower
