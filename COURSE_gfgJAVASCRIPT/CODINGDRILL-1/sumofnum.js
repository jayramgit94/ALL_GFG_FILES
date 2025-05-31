const arr = [1, 2, 3, 4, 5];

// Function to square each number in the array
const result = arr.reduce((acc, cur) => cur < 40 ? acc+cur:acc ,0)
console.log(result);
//reduce function iterates over each element in the array and returns a single value.
