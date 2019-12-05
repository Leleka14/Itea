// const today = new Date();
// console.log(today);
// today.setTime(today.getTime() + 60 * 1000);
// const timer = today;
// console.log(timer)

// console.log(localStorage);
// console.log(sessionStorage)

// sessionStorage.setItem('name', 'OLeh')
// localStorage.setItem('person', JSON.stringify({name: 'Oleg', age: 19}))
// const user = localStorage.getItem('userData');
// const inputs = document.querySelectorAll('input');
// const btn = document.querySelector('button');
// const h1El = document.querySelector('h1')

// if(user){
// 	let userData = JSON.parse(user)
// 	console.log()
// 	h1El.textContent = `${userData.name} ${userData.surname}`
// }

// btn.addEventListener('click', () =>{
// 	const userData = {
// 		name: inputs[0].value,
// 		surname: inputs[1].value
// 	}
// 	h1El.textContent = `${userData.name} ${userData.surname}`
// 	localStorage.setItem('userData', JSON.stringify(userData))
// })


const promiseEx = new Promise((resolve, reject) =>{
	setTimeout(() =>{
		resolve('oleh')
	}, 3000)
})

console.log(promiseEx)

promiseEx
	.then((value) =>{
		let val = value;
		return value + 'deneka'
	})
	.then((newvalue) =>{
		console.log(newvalue)
	})