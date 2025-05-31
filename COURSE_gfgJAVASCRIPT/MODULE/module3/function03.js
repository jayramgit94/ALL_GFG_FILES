function calcultaesum(x, y){
    return x + y;//return the sum of x and y to the function it self 
    console.log(x + y);//this line of code will not be executed because the return statement is above it
}

calcultaesum();//call the function but will not print the result because the function is not returning the result to the console
console.log(calcultaesum(10, 20));//print the result of the function to the console
//the value will be availabe to the console because the function is returning the result to the console

console.log("--------------------");


const result = calcultaesum(20, 20);//store the result of the function in a variable
console.log(result);//print the result to the console
console.log("--------------------");
const result2 = calcultaesum(20);// NaN
console.log(result2);

console.log("--------------------");

