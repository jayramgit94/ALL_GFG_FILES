const { keyInYNStrict } = require("readline-sync");

readline = require("readline-sync");
const key = readline.question("Enter key(name/age/city/state): ");
const course = readline.question("Enter course (html/css/js): "); 


const obj = {
    name :"jayram",
    age :100,
    // city:ngp,
    [course]: "course is not avilable"
}

obj.city = "Pune";
obj.state = "Maharashtra";

console.log(obj[key]);// this key is property of objectṇ
console.log(obj[course]);// this key is variable not property of object
// console.log(city);


