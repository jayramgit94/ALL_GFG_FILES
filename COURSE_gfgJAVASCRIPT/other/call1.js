const user1 = {
    name: "John",
    age: 30,
    sayhi() {//implicit binding of this keyword
        console.log("hello i am  " +(this.name));
    }
};

user1.sayhi();


user2 = {
    name: "Raj",
    age: 25,
    sayhi() {
        console.log("hello i am  " +(this.name));
    }
};



user1.sayhi();
user2.sayhi();
// output: hello i am John






function myage(name ){// function to display age of the user
    console.log(this.age, name);// this keyword refers to the object that calls the function
}



myage.call(user1);//explicit binding of this keyword
myage.call(user2);// also know for function borrowing

