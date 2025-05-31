// longest palindrom 
function longestPalindrome(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.substring(i, j + 1);
            if (sub === sub.split("").reverse().join("") && sub.length > res.length) {
                res = sub;
            }
        }
    }
    return res;
}
console.log(longestPalindrome("babaksdjbkbkbkdkd")); // "bab" or "aba"



//longest common preifix 

function longestCommonPrefix(arr) {
    if (!arr.length) return "";
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"



// Extract the last 3 characters of a string using slice().
let str = "JavaScript";
console.log(str.slice(-3)); // "ipt"


// Get the first word of a sentence using split().
let sentence = "Hello World how are you , do you now me ?";
console.log(sentence.split(" ")[10]); // "Hello"


///Convert ["a", "b", "c"] into "a-b-c" using join().
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"


// Convert "hello world" to "Hello World" using split(), map(), and join().
let str1 = "hello world";
let titleCase = str1.split(" ")
                   .map(word => word[0].toUpperCase() + word.slice(1))
                   .join(" ");
console.log(titleCase); // "Hello World"
