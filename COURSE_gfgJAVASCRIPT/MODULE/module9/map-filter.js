// map and filter is higher order functio property

/*
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/


// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// function getquare(number) {
//   return number ** 3;
// }
// const output = arr2.map(getquare);
// console.log(output);


/*
it call one element one by one and then aply the function and put 
the number into outpt and agin that goes on 
*/






const squarNUmber = arr2.map((number)=>{return number**2})// if u dont write reutrun will give u undefined
console.log(squarNUmber);//use the paraenthisis when multiple array ther

// map help to reduce the work of temp arr and looping
// takes a call back function
// loop over the array and goto one one number and call the function 












// const arr  = [ 1,2,3,4,5,6,7];

// function squaredNumebr(arr){
//     const temparr = [];
//     for(let number of arr ){
//         temparr.push(number**2)
//     }
//     return temparr;
// }

// const result = squaredNumebr(arr);
// console.log(result);
