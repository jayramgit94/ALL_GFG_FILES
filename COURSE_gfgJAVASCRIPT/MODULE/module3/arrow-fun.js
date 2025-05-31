const calculatesum = function(a, b) {
    return a + b;
}

const calculateSum = (x, y) => {
    return x+y;
}

console.log(calculatesum(3,4)); // 7
console.log(calculateSum(3,7)); // 7


console.log("-------------------------");


const calculatexgretery = (x, y) =>{

    if (x>y){
        return x+y;
    }else{
        return x-y;
    }
}
console.log(calculatexgretery(3,7)); // 


///also can be written as 
const calculatexgreter = (x, y) => x > y ? x+y : x-y;
console.log(calculatexgreter(3,7)); // 10




