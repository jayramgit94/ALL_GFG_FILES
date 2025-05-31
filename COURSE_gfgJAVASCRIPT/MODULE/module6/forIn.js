const obj = {
    name : "jayram",
    city : "Pune",
}

const ispropertyfound = "age" in obj;
console.log(ispropertyfound);// false

for (let key in obj){
    console.log(key);// name city
    console.log(obj[key]);// jayram Pune
    console.log(key, obj[key]);// name jayram city Pune
    
}
