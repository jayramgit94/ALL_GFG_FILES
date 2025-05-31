const arr = [1, 2, 3, 4, 5];

function getsum(acc, arr) {
    return acc + arr;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
};

const total = arr.myReduce(getsum, 0);
console.log(total); // 15
