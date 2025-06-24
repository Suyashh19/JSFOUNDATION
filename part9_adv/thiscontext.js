const person = {
    name: "Suyash",
    greet(){
    console.log(`Hi, i am ${this.name}`);
    },
}
person.greet();

const greetFunction = person.greet
greetFunction();

const boundGreet = person.greet.bind({name: "John"});
boundGreet();

//bind ,call, and apply

