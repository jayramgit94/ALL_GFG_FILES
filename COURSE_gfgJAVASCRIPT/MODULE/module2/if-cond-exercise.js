const firstString = "apple";
const sencondString = "77656";
const thirdString = "watermelon";

console.log(firstString.length);
console.log(sencondString.length);
console.log(thirdString.length);

const lengthOfFirstString = firstString.length;
const lengthOfSecondString = sencondString.length;
const lengthOfThirdString = thirdString.length;

if (lengthOfFirstString <   lengthOfSecondString && lengthOfFirstString <   lengthOfThirdString) {
    console.log(`${firstString} is the shortest fruit name`);
}

else if
    (lengthOfSecondString <   lengthOfFirstString && lengthOfSecondString <   lengthOfThirdString) {
    console.log(`${sencondString} is the shortest fruit name`);
    }
else if (lengthOfThirdString <   lengthOfFirstString && lengthOfThirdString <   lengthOfSecondString) {
    console.log(`${thirdString} is the shortest fruit name`);
}
else {
    console.log("found 2 or more strings of the same length");
}
