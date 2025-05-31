const user = {
    name: 'John',
    age : 30,
    address : {
        city : 'Berlin',
        country : 'Germany',
    },
    likes: "eats mango"
}

// console.log(user.city);
//note that cannot read the propert of undefied
console.log(user.friut?.mango);// using opetional chaning this will not going to give error this will check if it is not present it will not check onwards
console.log(user.address?.city);// this is have so it will check it and return it 




// if (user.address !== undefined ){
//     console.log(user.address.city);
    
// }else{
//     console.log("city not available");
// }


// fot functionns how the functinal chaning works
const user1 = {
    name: 'John',
    age : 30,
    address : {
        city : 'Berlin',
        country : 'Germany',
    },
    likes: "eats mango",
    getLikes(){
        return this.likes;
    }
}


console.log(user1.getLikes());// this will give the output
console.log(user1.getLik?.());// this will not give the output as the function is not present

// console.log(user1.getLikes().toUpperCase());// this will give the output

