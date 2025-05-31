const username = "jayram";
try {
    console.log(myname);
    
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
     
    
    
    console.log("error occured ");
}finally{
    console.log("finally block is always executed");
}

console.log(username);
