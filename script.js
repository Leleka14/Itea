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

// noBinding.showText()

// function printFruit(){
// 	document.write(`<h1>${this.name} ${this.color}</h1><br>`)
// }

// const fruits2 = [
// 	{
// 		name:'banana',
// 		color:'yellow'
// 	},
// 	{
// 		name:'lemon',
// 		color:'yellow',
// 	},
// 	{
// 		pineapple:'pineapple',
// 		color:'brown'
// 	}
// ]

// const info = ['name', 'alex', 'age', 25]

// const obj = {}


// // Object.assign(obj, info)
// console.log(obj)

// function printInf(){
// 	info.forEach((key, index) => {
// 	if (index % 2 == 0){
// 		obj[key]=info[index+1]		
// 	}
// })

// 	console.log(`hello im ${this.name} and im ${this.age} years old`)
// }

// printInf.call(obj)


// for(let key in fruits2){
// 	printInf.call(fruits2[key])
// 	printFruit.call(fruits2[key])
// }

// this.table = `window table`

// this.garage = {
// 	table: `garage table`,
// }

// class createRoom {
// 	constructor(name, age){
// 		this.name = name
// 		this.age = age
// 		this.table = `${this.name}s table`
// 		this.greet = `My name is ${this.name} and I am ${this.age} year's old`
// 		document.write(this.greet, `<br>`)
// 	}

// 	cleanTable(soap){
// 		console.log(`cleaning ${this.table} using ${soap}`)
// 	}
// }

// const jillsRoom = new createRoom(`jill`, 12)
// const johnsRoom = new createRoom(`john`, 20)

// jillsRoom.cleanTable(`some soap`)

// console.log(jillsRoom)

// let btn = document.querySelector('button')

// function createHandeler(element){
// 	this.handler = function(){
// 		element.addEventListener('click', (e) => {
// 			console.log(e.target)
// 		})
// 	}
// }

// const firstHandler = new createHandeler(btn)

// firstHandler.handler()

// function greetFn(greet){
// 	function end(name){
// 		return(`${greet} ${name}`);
// 	};
// 	return end;
// };

// let greet = greetFn('hello');

// console.log(greet('alex'));


