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

// (function(){
// 	window.a = 21
// })()  //anonym function
// const a = 22

// const singleTone = (function(){
// 	let count = 0,
// 		instanse
// 	function increaseCount(){
// 		count +=1
// 	}
// 	function showCount(){
// 		return count
// 	}
// 	function createInstanse(){
// 		return function(){
// 			return{
// 				increase:increaseCount,
// 				show:showCount
// 			}
// 		}
// 	}
// 	return{
// 		getInstance: function(){
// 			if(!instanse){
// 				instanse = createInstanse()
// 			}
// 			return instanse
// 		}
// 	}
// })()

// const pull = singleTone.getInstance()()

// let makeRed = document.querySelector('.red')
// let makeBlue = document.querySelector('.blue')
// let makeOrange = document.querySelector('.orange')

let btn = document.querySelector('button')
let count = 0
let div1 = document.getElementById('text')

clickFunction = (element) =>{
	element.addEventListener('click', () =>{
		console.log(`User clicked ${count} times`)
		div1.innerHTML = `User clicked ${count} times`
		count++;
	})
}

clickFunction(btn);


colorFunction = (id) => {
	const array = document.getElementById(id).childNodes;
	console.log(array)
	for(let i in array){
		if(array[i].nodeName === 'LI'){
			if(i < 7){
				array[i].style.backgroundColor = 'red'
			}
			else if(i >= 7 && i < 11){
				array[i].style.backgroundColor = 'blue'
			}
			else{
				array[i].style.backgroundColor = 'orange'
			}
		}
	}

	// array[0].parentNode.lastChild.previousSibling.style.backgroundColor = 'orange'
}

// colorFunction('list')


loopForSetColors = (list, color) => {
	for(let i = 0; i < list.length; i++){
		list[i].style.backgroundColor = color
	}
}

colorFunction1 = () => {
	const makeRed = document.getElementsByClassName('red')
	const makeBlue = document.getElementsByClassName('blue')
	const makeOrange = document.getElementsByClassName('orange')
	loopForSetColors(makeRed, 'red')
	loopForSetColors(makeBlue, 'blue')
	loopForSetColors(makeOrange, 'orange')
	
}

// colorFunction1()

const list = document.querySelector('ul')
let currentStyle
colorFunction2 = (list) => {
	list.childNodes.forEach(element => {
		if(element.nodeType === 8){
			let styleText = element.nodeValue.trim()
			currentStyle = styleText.split(' ')
		}
		if(element.nodeType === 1){
			if(currentStyle.length){
				element.style[currentStyle[0]] = currentStyle[1]
			}
		}
	})
}

// colorFunction2(list)

const butt = document.getElementById('body')

settingBordersFunction = (element) => {
	element.addEventListener('click', () =>{
		document.body.style.border = 'thick solid #0000FF'
	})
}

// settingBordersFunction(butt)

// const academy = {
// 	name: 'ITEA',
// 	course: 'JS Advanced'
// };

// Object.defineProperty(academy, 'getFullInfo', {
// 	get: function () {
// 		return `Academy: ${this.name}, course: ${this.course}`
// 	},
// 	enumarable: true,
// 	configurable: true
// })

// console.log(academy.getFullInfo)
// console.log(academy)

// const academy = {
// 	students: []
// }

// Object.defineProperty(academy, 'addStudent', {
// 	set: function(name){
// 		let string = name.split(' ')
// 		this.students.push({
// 			createdDate: new Date(),
// 			firstName: string[0],
// 			secondName: string[1]
// 		})
// 	},
// 	get: function() {
// 		return this.createDate, this.name, this.surname
// 	}
// })

// academy.addStudent = 'Yuriy Petrichenko'
// console.log(academy)


















// for(let i = 0; i < document.body.childNodes.length; i++){
// 	document.write(document.body.childNodes[i].nodeValue)
// }

// replaceWithInnnerHTML = () =>{
// 	const bodyText = document.body.innerHTML
// 	document.body.innerHTML = `<h1>${bodyText}</h1>`
// }
// replaceWithInnnerHTML()
