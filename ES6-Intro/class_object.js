class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new User('Moin', 22);
person1.sayHello();

const person2 = new User('Suraiya', 20);
person2.sayHello();