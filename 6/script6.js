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


class Car {
    constructor(model, year, price, mileage){
        this.model = model
        this.year = year
        this.price = price
        this.mileage = mileage
    }
    getMark(){
        return this.mark
    }
    getYear(){
        return this.year
    }
    getPrice(){
        return this.price
    }
    getMileage(){
        return this.mileage
    }
}

// const myCar = new Car('audi', 2012, 15500, 55555)

// console.log(myCar)

class Audi extends Car{
    comforts(){
        this.autopilot = false
        this.parctronic = true
        this.conditioner = true
    }
    prices(){
        
    }
}
class Tesla extends Car{
    comforts(){
        this.autopilot = true
        this.parctronic = true
        this.conditioner = true
    }
}
class Daewoo extends Car{
    comforts(){
        this.autopilot = false
        this.parctronic = false
        this.conditioner = false
    }
}

const a6 = new Audi('A6', 2013, 15000, 45000)
