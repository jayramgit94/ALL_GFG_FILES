// function User(){// constructor function
// (this.name = "John", this.age = 30);// this keyword refers to the object that is created by the constructor function

// }
// let user1 = new User();// the new keyword creates a new object and assigns it to user1
// console.log(user1.name);
// console.log(user1.age);// output: John 30




function User(name, age){// constructor
    this.name = name;// this keyword refers to the object that
    this.age = age;
}

let user1 = new User("jayram", 30);// new keyword creates a new object and assigns it to user1
let user2 = new User("Raj", 25);

console.log(user1.name);//  output: jayram
console.log(user2.name);
console.log(user1.age);
console.log(user2.age);

