function persom(name,age){
    this.name = name
    this.age = age
}
function Car(make,model){
    this.make = make
    this.model=model
}
let myCar = new Car("Toyota","Camry");
// console.log(myCar);

let mynewCar = new Car("Tata","RangeRover");
    // console.log(mynewCar);

    function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a Cup of ${this.type}`
    }
    }
    let teaType = new Tea("Masala Chai")
    // console.log(teaType.describe());

    function animal(species){
        this.species=species
    }
    animal.prototype.sound = function(){
        return `${this.species} makes a sound`
    }
    let dog= new animal("Dog")
    console.log(dog.sound());
    let cat = new animal("Cat")
    console.log(cat.sound());
    
    
    
    

