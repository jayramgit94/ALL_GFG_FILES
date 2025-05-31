// const obj ={
//     name: 'John',
//     displaymessage : function(){
//         console.log("Hello" +bj.name);
//     }
// };
// obj.displaymessage(); // 
// console.log(obj);




function calculateSum(){
console.log(this)}
calculateSum(); // this refers to global object
 this.alert("Hello"); // this refers to window object
 console.log(this);// this refers to global object
 