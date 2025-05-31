const arr = [["html", "css", "js"],1, 2, 3, 4,];
const [courses , ...rest] = arr;
console.log(courses); // 1
console.log(rest); // [2, 3, 4, 5, ["html", "css", "js"]]