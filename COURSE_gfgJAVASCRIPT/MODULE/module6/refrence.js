const person1 = {
    name: 'John',
    age : 30,
    address : {
        city : 'Berlin',
        country : 'Germany'
    }
}

const person2 = Object.assign({}, person1);//copying the object method it is also shalllow copy
// console.log(person2);

person2.name = 'jay';
person1.age = 40;
person2.address.city = 'New York';
person2.address.country = 'USA';
console.log(person1);
console.log(person2);

//in shallow copy the nested object is not copied it is refrence to the original object
//btu in deep copy the nested object is also copied






// const person2 = person1;

// person2.name = 'doe';
// person1.age = 40;


// console.log(person1);
// console.log(person2);