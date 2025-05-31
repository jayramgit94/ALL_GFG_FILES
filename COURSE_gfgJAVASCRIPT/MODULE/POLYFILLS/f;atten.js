const arr = [1, 2, 3, 4, [5, 6], [[[7, 8], [9, 10], [11, 12]]]];

// const result = arr.flat(Infinity);
// console.log(result);

Array.prototype.myFlat = function (depth = 1) {
  let result = [];
  this.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(item.myFlat(depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
};

const result = arr.myFlat(Infinity);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]