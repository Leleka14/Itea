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

// const promiseEx = new Promise((resolve, reject) =>{
// 	setTimeout(() =>{
// 		resolve('oleh')
// 	}, 3000)
// })

// console.log(promiseEx)

// promiseEx
// 	.then((value) =>{
// 		let val = value;
// 		return value + 'deneka'
// 	})
// 	.then((newvalue) =>{
// 		console.log(newvalue)
// 	})

//  const replaceProps = {
//     age: 28,
//     hobbies: ['Reading books']
// }
// const user = {
//     name: 'Alex',
//     age: 26,
//     jobProfile: 'Web UI',
//     hobbies: ['swimming', 'play football']
// }

// localStorage.setItem('user', JSON.stringify(user, (key, value) => {
//         if(key in replaceProps){
//             value = replaceProps[key];
//         }
//         return value;
// }));

// const reviewerFunction = JSON.parse(userFromStorage, (key, value) =>{
	
// 	if(key === `name`){
// 		return undefined;
// 	}
// 	return value
// 	})

// console.log(reviewerFunction)
// const listOfLogins = document.querySelector('#listOfLogins')
// const usersURL = 'https://api.github.com/users/Madebyspeedster'
// const photo = document.querySelector('#photo')

// fetch(usersURL)
// 	.then(data =>{
// 		return data.json()
// 	})
// 	.then(users =>{
// 		photo.src = users.avatar_url
// 		console.log(users)
// 	})
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/users')
// const githubUsers = []
// const promise = new Promise(function(resolve, reject){
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState === 4 && xhr.status === 200){
// 			resolve(parseServerData(xhr.responseText))
// 		}
// 		if(xhr.status != 200){
// 			reject('ERROR')
// 		}
// 	}
// })
// const parseServerData = (responseText) => JSON.parse(responseText)
// xhr.send()
// promise
// 	.then(users => {
// 		for(let i = 0; i < users.length; i++){
// 			const newLogin = document.createElement('li')
// 			newLogin.textContent = users[i].login
// 			listOfLogins.appendChild(newLogin)
// 		}
// 	})
// 	.catch(e => {
// 		console.log(e)
// 	})


const baseAPI = ' https://reqres.in/api'
const userListContainer = document.querySelector('#userListContainer')
const spinner = document.querySelector('#spinner')

const getUsersList = (pageNumber) => {
	spinner.style.display = 'block'
	fetch(`${baseAPI}/users?page=${pageNumber}`)
		.then(response => response.json())
		.then(users =>{
			resetUsersList()
			setTimeout(() => {
				users.data.forEach(user =>{
					userListContainer.innerHTML += userCARD(user) 
				})
				spinner.style.display = 'none'
			}, 100)
			
		})
}

const userCARD = (user) =>{
	return `
	<div class="card m-2" style="width: 18rem;">
	  <img src="${user.avatar}" class="card-img-top" alt="...">
	  <div class="card-body">
	    <h5 class="card-title">${user.email}</h5>
	    <p class="card-text">${user.first_name} ${user.last_name}</p>
	    <p class="card-text"> User ID: ${user.id}</p>
	  </div>
	</div>
`
} 

const resetUsersList = () =>  userListContainer.innerHTML = ''

const getSingleUser = (userID) =>{
	spinner.style.display = 'block'
	fetch(`${baseAPI}/users/${userID}`)
		.then(response => response.json())
		.then(users =>{
			resetUsersList()
			setTimeout(() => {
				userListContainer.innerHTML += userCARD(users.data) 
				spinner.style.display = 'none'
			}, 100)
			
		})
}
