// Number
let balance = 120;
let anotherbalance = new Number(120)

// console.log( balance);
// console.log(anotherbalance.valueOf());


// console.log( typeof balance);
// console.log(typeof anotherbalance);

//Boolean
let isActive = true;
let isREallyActive = new Boolean(true)  //not recommended

//null and undefined 
let firstname= null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

// String
let mystring ="hello"
let mystringone = "Hola"
let username = "Suyash"

let oldGreet = mystring + " " +  "Suyash";
// console.log(oldGreet);


let greeMessage = `hello ${username}`; //string interpulation
let demoOne = `Value is ${2*2}`;
// console.log(demoOne);

console.log(greeMessage);

let sm1 = Symbol("Suyash");
let sm2 = Symbol("Suyash");
console.log( sm1 == sm2 );


