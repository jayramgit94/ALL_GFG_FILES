//01

// const greetmessage = function (){
//     console.log("heloo jayram welcome to my worlld!");
    
// };
// greetmessage();



//02


// function wrapper (){
//     return "welocme to the my world";
    
// };

// function greetmessage(inner, name){
//     let message = inner()
//     console.log(name , message);
    
// }


// greetmessage(wrapper, "jayram");// passing a function as argument 



//03


function greetmessage(){
    function wrapper(){
        let name = "jayram";
        console.log(name, "welcome to my world!");
        
    }
    return wrapper;
}

// greetmessage();//wrapper inside the functin //pointting towards a function
// const output = greetmessage();
// output();

greetmessage()();// first para is to calling and second parar also calling agin the function 
//same as it form its uper like that



























