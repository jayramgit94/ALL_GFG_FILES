const obj ={
    name : "jayram",
    age : 23,
    salary : 5000000
};


const entries = Object.entries(obj);
console.log(entries);
const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);
const value = Object.freeze(obj);
console.log(value);


const obj1 ={
    x:1,
    y:2,
    z:3
};

const values1 = Object.values(obj1);
console.log(values1);
//sum of the values
const sum = values1.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

//square of the values
const square = values1.map((value)=>value*value);
console.log(square);
