class children {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const child1 = new children("jayram", 12);
const child2 = new children("riyaaj", 2);
const child3 = new children("om", 7);

let arr = [child1, child2, child3];
console.log(arr.sort((a, b) => a.getAge() - b.getAge()));

console.log(arr[0].getName());