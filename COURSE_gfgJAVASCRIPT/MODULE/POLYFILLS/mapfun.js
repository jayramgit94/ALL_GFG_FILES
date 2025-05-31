let arr = [1, 2, 3, 4, 5];
// console.log(arr);

function callback(number) {
    return number * 2;
}

Array.prototype.myMap = function(callback) {
    let temparr = [];
    for (let i = 0; i < this.length; i++) {
        temparr.push(callback(this[i], i, this));
    }
    return temparr;
}

const squaredArr1 = arr.myMap(callback);
console.log(squaredArr1);