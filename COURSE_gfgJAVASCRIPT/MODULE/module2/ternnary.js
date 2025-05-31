const totalmarks = 300;

// also can use if else condition
// (totalmarks > 40) ? console.log("pass") : console.log("fail");

// const result = (totalmarks > 40) ? "pass" : "fail";
// console.log(result);

const result = totalmarks <40 ?"you need to work hard" : totalmarks < 60 ? "good" : totalmarks <75 ? "A grade" : totalmarks <85 ? "A+ grade" : "Genius";
console.log(result);
