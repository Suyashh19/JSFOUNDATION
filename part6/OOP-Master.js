// Encapsulation

class bankaccpunt {
    #balance =20;
    deposit (amount){
        this.#balance += amount
        return this.#balance;
    }
    getbalance(){
        return `$ ${this.#balance}`;
    }
    
}
let accounr = new bankaccpunt()
// console.log(accounr.getbalance());

// Abstraction    it hides the comples implementation detail.
class coffeemachine{
    start(){
        // call DB 
        // Filter value
        return `Starting the machine ...`;

    }
    brewcoffee(){
        //Complex Calculation
        return `brewing coffee`;
    }
    pressstartbutton(){
        let msgone = this.start();
        let msgtwo = this.brewcoffee();
        return `${msgone}  ${msgtwo}`
    }
}
let mymachine = new coffeemachine()
// console.log(mymachine.start());
// console.log(mymachine.brewcoffee());
// console.log(mymachine.pressstartbutton());

// polymorphism

class Bird{
    fly(){
        return `i am flying ..`;

    }
}
class Penguin extends Bird {
    fly(){
        return `it cant fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// Static Menthod
class calculator{
     static add(a,b){
        return a+b;
    }
}
// let miniCalc = new calculator()
// console.log(miniCalc.add(2,3));

// console.log(calculator.add(2,3));

//Getters and Setters
class Employes{
    #salary;
    constructor(name,salary){
        this.name = name
        this.#salary= salary
    }
    get salary(){
       return `you are not allowed to see salary`;
    }
   set salary(value){
    if (value < 0) {
        console.error("Invalid Salary");
            
    }else{
        this._salary = value;
    }
   }

}
let emp = new Employes("Alice",-50000)
console.log(emp.salary);




