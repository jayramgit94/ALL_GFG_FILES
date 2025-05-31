function getObjects(name, city){
    return {// using short hand property 
        name, // name : name
        city // city : city
    }
}

const obj = getObjects("jayram", "Pune");// {name: "jayram", city: "Pune"}
console.log(obj);


const student = " ashish ";// using short hand property
const course = "react";// using short hand property
console.log({student, course});// {student: " ashish ", course: "react"}
