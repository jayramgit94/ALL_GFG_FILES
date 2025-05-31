// let str = "hello";

// // Using `for...of`
// for (let char of str) {
//     console.log(char);
// }

// // Using `forEach` (with split)
// str.split("").forEach(char => console.log(char));

// // Using `map`
// [...str].map(char => console.log(char));

// // Using `for` loop
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }



// let fruits = ["banana", "apple", "grape"];
// fruits.sort();
// console.log(fruits);  // ["apple", "banana", "grape"]

// let nums = [3, 1, 10, 5];
// nums.sort((a, b) => b - a);  // Ascending
// console.log(nums); // [1, 3, 5, 10]



// 🔥 Interview Questions & Solutions
// 1. Reverse a String Using Spread & Join
let str = "hello";
console.log([...str].reverse().join("")); // "olleh"




// 2. Find the Most Frequent Element in an Array
function mostFrequent(arr) {
    let count = {};
    arr.forEach(n => count[n] = (count[n] || 0) + 1);
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3])); // 3




// 3. Remove Duplicates From an Array

let arr = [1, 2, 2, 3, 3, 4];
console.log([...new Set(arr)]); // [1, 2, 3, 4]


// 4. Flatten a Nested Array
let nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5]


// 5. Sort an Array of Objects by Property
let users = [{ name: "John", age: 30 }, { name: "Alice", age: 25 }];
users.sort((a, b) => a.age - b.age);
console.log(users);



// 6. Convert an Object into an Array
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]



// 7. Merge Two Arrays Without Duplicates
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
console.log([...new Set([...arr1, ...arr2])]); // [1, 2, 3, 4, 5]



// 8. Check if a String Is a Palindrome
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); // true



// 9. Find the First Non-Repeating Character
function firstUniqueChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null;
}
console.log(firstUniqueChar("swiss")); // "w"




// 10. Group Anagrams
function groupAnagrams(words) {
    let map = {};
    words.forEach(word => {
        let sorted = word.split("").sort().join("");
        map[sorted] = map[sorted] || [];
        map[sorted].push(word);
    });
    return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));