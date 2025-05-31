// function wrapper (){//first class function
//     return "welcome to my world"
// };

//higher order function -- it takes as the functin as argument
// function greetmessage(wrapper){//accepting the func as argumnet
//     console.log("jayram", wrapper());

// }
// greetmessage(wrapper);// jayram welcome to my world

// 02

// function displymessage(){
//     return function(){//this is a higher order function
//         console.log("hellow from the inner functin");

//     }
// }
// const output = displymessage();
// output();

// const arr = [1,2,3,4,5,6];

// function squareONum(arr){
//     let squaredNumebr =[];
//     for(let number of arr){
//         squaredNumebr.push(number*2)

//     }
//     return squaredNumebr;
// }

// const output = squareONum(arr);
// console.log(output);

// function cubeOfNum(arr){
//     let CubedNum =[];
//     for(let number of arr){
//         CubedNum.push(number*number*number)

//     }
//     return CubedNum;
// };

// const result = cubeOfNum(arr);
// console.log(result);








// const arr = [1, 2, 3, 4, 5];

// function square(number) {
//   //first order function
//   return number * 2;
// }
// function cube(number) {
//   //first order function
//   return number ** 3;
// }

// function fourth (number){
//     return number **4;
// }

// function calculatePower(wrapper, arr) {
//   //higher order function
//   let temparr = [];
//   for (let number of arr) {
//     temparr.push(wrapper(number));
//   }
//   return temparr;
// }

// const squareOfNUmber = calculatePower(square, arr);
// console.log(squareOfNUmber);


// const CubedOfNumb = calculatePower(cube, arr);
// console.log(CubedOfNumb);


// const FourthOfNumb = calculatePower(fourth, arr);
// console.log(FourthOfNumb);






//mine

const arr2 = [ 1,2,3,4,5,6]

function indexing(number, power){//first order function
    return number ** power;
}

function powering(wrapper, arr){//higher order function 
    let temparrr =[];
    for(let number of arr2){
        temparrr.push(wrapper(number, power))
    }
    return temparrr;
}

let power = 4;
const powerofnum = powering(indexing, arr2);
console.log(powerofnum);
