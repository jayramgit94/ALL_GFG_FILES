/**
 * filter
 * 
 * 
 */

const arr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// function FilterNumb(arr){
//     const temparr =[];
//     for(let number of arr){
//         if(number > 5){
//             temparr.push(number);
//         }

//     }
//     return temparr;
// }
// const output = FilterNumb (arr);
// console.log(output);


const output= arr.filter(number => number > 5);
console.log(output);

const evennum = arr.filter(number => number % 2 === 0);
console.log(evennum);

const oddnum = arr.filter(number => number %2 !== 0);
console.log(oddnum);

arr2 = arr.reverse();
console.log(arr2);


let arr3 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(arr3);



