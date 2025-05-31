// function powe(n){
//     if(n == 0) return false;
//     while (n!=1){
//         if(n%2 != 0) return false
//         n = n/2;
//     }
//     return true;
// }

// console.log(powe(16)); // trueṇ


function powe(n){
    if(n == 0) return false
    if ((n & (n-1)) ==0){
        return true;
    }
    else {
        return false;
    }
}

console.log(powe(32)); // trueṇ
