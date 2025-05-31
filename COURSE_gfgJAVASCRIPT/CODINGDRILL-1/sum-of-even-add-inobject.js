const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc , cur) => cur%2 === 0 ? {...acc, even: acc.even + cur} : {...acc, odd:acc.odd + cur }, {even: 0, odd: 0});
console.log(result);

//inital value is an object with two properties even and odd both are set to 0
//if the current number is even, it adds the current number to the even property
//if the current number is odd, it adds the current number to the odd property
//finally, it returns the object with the sum of even and odd numbers in the array