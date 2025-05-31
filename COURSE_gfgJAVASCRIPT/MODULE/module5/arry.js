let studentname = ["jay", "vijay", "ajay", "sanjay", "ranjay"];//also can add many thing in diff types string num etc
// console.log(studentname[0]);
// console.log(studentname[1]);
// console.log(studentname[2]);
// console.log(studentname[3]);
// console.log(studentname[5]);


let n = studentname.length;
// for(let  i = 0; i < n; i++){   //if i <= n then it will give undefined
//     console.log(studentname[i]);
// }


/** for let of  */
// for(let name of studentname){
//     console.log(name);
// }

/** for let in */
for(let name in studentname){
    console.log(name);
    console.log(studentname[name]);
}