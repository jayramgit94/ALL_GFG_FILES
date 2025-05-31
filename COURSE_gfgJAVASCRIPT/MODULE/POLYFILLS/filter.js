const arr = [1, 2, 3, 4, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getFilter(number) {
    return number > 5; // true or false
}

// Arrow function example
// const result2 = arr.filter((number) => number > 7);
// console.log(result2); // [ 8, 9 ]

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

console.log(arr.myFilter(getFilter)); // [ 6, 7, 8, 9 ]

// const result = arr.filter(getFilter);
// console.log(result); // [ 6, 7, 8, 9 ]

// let temparr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         temparr.push(arr[i]);
//     }
// }
// console.log(temparr); // [ 6, 7, 8, 9 ]
