// const displaymessage = "hllo jayram how are you";

// const index = console.log(displaymessage.indexOf('j'));//6
// //if it return -1 means the char is not present in it 
// console.log(index);






// var str = "Hello, World!";

// function findchar (text, char){
//     const index = text.indexOf(char);
//     if(index === -1){
//         return 'Character not found';
//     }else{
//         return `Character found at index ${index}`;
//     }
// }
// const result = findchar(str, '!');//12
// console.log(result);


//usinf arrow function

const findchar = (text, char) => text.indexOf(char) == -1 ? "charctern not found " : "charcter found at index " + text.indexOf(char);
const result = findchar("hello world", 'w');
console.log(result);
