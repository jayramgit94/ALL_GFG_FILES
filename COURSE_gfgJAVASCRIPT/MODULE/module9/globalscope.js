/**
 * global scope and local vairable
 * global , local and block scope
 */

// any function which is not inside a function is a global function

let x = 3; // global variable

function shownumber() {
  var y = 5; // local variable
//   console.log(y);//5 // this can accessable from inside but not insde
  //only known inside
//   console.log({ x });//3
}
shownumber();

// console.log(y); // for now thiis y is not defined it will give you erroe


// console.log({ x }); // this will print 3 or x value bec it is not inside any function




// function f1() {
//     // console.log({y});//will give you an errore
//   console.log({ x });
// }
// f1();




// {
//     let a =2 ;
//     let b =3 ;
//     console.log({a});
//     console.log({b});   
// }
// console.log({a});//erroe
// console.log({b});//erroe



// {
//     var a = 5;
//     var b = 4;
//     console.log(a);//5
//     console.log(b);//4
// }
// console.log(a);//5
//     console.log(b);//4



// {
//     const a = 5;
//     const b = 4;
//     console.log(a);//5
//     console.log(b);//4
// }
// console.log(a);//error
//     console.log(b);//error
    


// var is global function
// scope is decleared with var is global 
// let and const are block level

// if(true){
//     var a = 5;//const or let me error aayega 
//     var b = 4;
    
// }
// console.log(a);//5
//     console.log(b);//4

