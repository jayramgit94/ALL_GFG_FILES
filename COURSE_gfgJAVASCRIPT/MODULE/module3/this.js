function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` refers to the Person object
        console.log(this.age);
    }, 1000);
}

let p = new Person();