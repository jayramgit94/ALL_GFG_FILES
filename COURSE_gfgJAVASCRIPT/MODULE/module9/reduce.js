const arr = [ 1,2,3,4,5,6,7];
//acc  = accumulator , cur = current

const reducerFun = (acc, cur) => acc + cur;
//acc becomes whhat is the outpt it store in acc
//1+2 = 3 --> acc
//3+3 = 6
//it takes 2 parameter a cllback functio an a reduceer




const output = arr.reduce(reducerFun, 0 )

console.log(output);
