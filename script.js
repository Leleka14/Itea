// const user = {
// 	name: 'Oleh',
// 	age: 18
// }

// const user2 = {
// 	surname: 'Deneka'
// }

// user.__proto__ = user2


// let fruits = {
//   apple: 3,
//   lemon: 0,
//   bananas: 5,
//   pineapple: 0
// };

// let vegetables = {
//   potato: 2,
//   tomato: 1,
//   carrot: 0
// }
// Object.setPrototypeOf(fruits, vegetables)

// let sortedFruits = Object.create(null)
// for(let key in fruits){
// 	if (fruits[key] > 0){
// 		sortedFruits[key] = fruits[key]
// 	}
// }

// function Animal(name){
// 	this.name = name
// 	this.canWalk = true
// }

// var animal = new Animal("Oleh")

// function Person(name) {
//     const age = Math.floor(Math.random() * 60);
//     this.name = name;
//     this.sayHello = function() {
//         console.log(`Hello I'm ${this.name}, and I'm ${age} old`);
//     }
// }

// const alex = new Person('Alex');


// function Calculator(){
// 	this.sum = function(a, b) {
// 		const result = a + b
// 		return(`The sum of ${a} and ${b} is ${result}`)
// 	}
// }

// const calc = new Calculator()

// const obj = {
// 	name: "alex"
// }

// const obj2 = Object.create(obj)
// const obj3 = new Object(obj)


// const noBinding = {
// 	person: "No speedster",
// 	showText(){
// 		setTimeout(this.printInfo.bind(this), 2000)
// 	},
// 	printInfo(){
// 		document.write(`hello ${this.person}`)
// 	}
// }

// function printFruit(){
// 	document.write(`${this.name} ${this.color}<br>`)
// }

const fruits2 = [
	{
		name:'banana',
		color:'yellow'
	},
	{
		name:'lemon',
		color:'yellow',
	},
	{
		name:'pineapple',
		color:'brown'
	}
]

function printInf(){
	console.log(this.name, this.color)
}

printInf.apply(fruits2)

for(let key in fruits2){
	printInf.call(fruits2[key])
}
