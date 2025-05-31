function search(arr, x){
    let n = arr.length;;
    for (let i = 0; i < n ; i++){
        if(arr[i] == x){
            // console.log(x);
            return i;
            
       
        }
    }
    return -1;

}

let arr = [ 1,2,3,4,5,6,8,9];
console.log(search(arr, 1));