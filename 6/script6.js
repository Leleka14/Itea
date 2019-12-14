// class Coffee {
//     cost() {
//         return 5;
//     }
// }

/**
 *  Let's create custom decorator.
 */

// const sugar = (coffee) => {
//     const cost = coffee.cost();
//     coffee.cost = () => cost + 1;
    
// };

// const defaultCoffee = new Coffee();

/**
 * As we see we're have a new default cup of coffee but what if we want to add sugar into our coffee.
 * Cool we have sugar @decorator and now need just execute sugar decorator with our defaultCoffee.
 */
// console.log(defaultCoffee.cost()); // 5;
// sugar(defaultCoffee);
// console.log(defaultCoffee.cost()); // 6;


// const milk = (coffee) => {
//     const cost = coffee.cost()
//     coffee.cost = () => cost + 5
// }

// milk(defaultCoffee);
// console.log(defaultCoffee.cost());

// class Car {
//     constructor(model, year, price, mileage){
//         this.model = model
//         this.year = year
//         this.price = price
//         this.mileage = mileage
//     }
//     getModel(){
//         return this.model
//     }
//     getYear(){
//         return this.year
//     }
//     getPrice(){
//         return this.price
//     }
//     getMileage(){
//         return this.mileage
//     }
// }

// class Audi extends Car{
//     comforts(){
//         this.autopilot = false
//         this.parctronic = true
//         this.conditioner = true
//     }
//     prices(){
//     }
// }
// class Tesla extends Car{
//     constructor(model, year, price, milage){
//         super(model, year, price, milage)
//         this.autopilot = true
//         this.parctronic = true
//         this.conditioner = true
//     }
// }
// class Daewoo extends Car{
//     comforts(){
//         this.autopilot = false
//         this.parctronic = false
//         this.conditioner = false
//     }
// }

// const a6 = new Tesla('A6', 2013, 15000, 45000);

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

class Animal{

    static type = 'ANIMAL'

    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice(){
        console.log('I am animal')
    }
}

// const animal = new Animal({
//     name: 'Animal', 
//     age: 5,
//     hasTail: true 
// })


// class Cat extends Animal{
//     static type = 'CAT'
//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()
//         console.log('I am cat')
//     }
//     get ageInfo(){
//         return this.age * 7
//     }

//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })








