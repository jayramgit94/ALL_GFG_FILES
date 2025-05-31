function calculatePower(wrapper, arr){
    const tempArr = [];
    for (let number of arr){
        tempArr.push(wrapper(number))
    }

    return tempArr;

}

function square (number){
    return number ** 2;
}

function cube ( number){
    return number ** 3;
}

const arr =  [ 1,2,3,3,4,5,6,7];

const squaredNumber = calculatePower(square, arr)
const cubeddNumber = calculatePower(cube, arr)
console.log(squaredNumber);
console.log(cubeddNumber);

