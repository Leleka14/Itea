
const element = {}
element.info = {}
element.methods = {}
element.info.currentUser = sessionStorage.getItem('currentUser')
element.info.loginAndSignup = document.querySelector('#login-and-signup')
element.info.exitImage = document.querySelector('#exit')
element.info.userListContainer = document.querySelector('#user-list-container')
element.info.usersInfo = localStorage.getItem('information')
element.info.array = []
element.info.searchInput = document.querySelector('#input-of-user-search')
element.info.btn = document.querySelector('#search-button')

element.methods.takingData = (function() {
    if (element.info.usersInfo) {
        element.info.array = JSON.parse(element.info.usersInfo)
    }
})()

element.methods.userCard = (user) =>{
	let singleCard = `
	<div class="card m-2" style="width: 18rem;">
	  <div class="card-body">
	  	<img src='${user.image}' class='img-thumbnail'>
	    <h5 class="card-title">${user.nickname}</h5>
	    <p class="card-text">${user.name} ${user.surname}</p>
	    <p class="card-text">${user.email}</p>
	  </div>
	</div>
	`	
	
	return singleCard;
} 

element.methods.getUser = (function(){
	if(element.info.currentUser){
		element.info.currentUser = JSON.parse(element.info.currentUser)
		element.info.loginAndSignup.style.display = 'none'
		element.info.exitImage.style.display = 'block'
	}
	else{
		element.info.loginAndSignup.style.display = 'block'
	}
})()

element.info.exitImage.addEventListener('click', () => {
	sessionStorage.clear()
	document.location.reload(true);
})

element.methods.displayUsers = (function(){
	element.info.array.forEach((e) => {
		element.info.userListContainer.innerHTML += element.methods.userCard(e)
	})
})()

element.info.searchInput.addEventListener('keyup', () =>{
	element.info.userListContainer.innerHTML = null
	element.info.array.forEach((e) =>{
		element.info.fullName = `${e.name} ${e.surname}`
		if(element.info.fullName.includes(element.info.searchInput.value)){
			element.info.userListContainer.innerHTML += element.methods.userCard(e)
		}
	})
})

// const baseAPI = ' https://reqres.in/api'
// const userListContainer = document.querySelector('#user-list-container')
// const btn = document.querySelector('#search-button')
// const spinner = document.querySelector('#spinner')
// const inpt = document.querySelector('#input-of-user-search')
// const getUsersList = () => {
// 	spinner.style.display = 'block'
// 	fetch(`${baseAPI}/users?page=1`)
// 		.then(response => response.json())
// 		.then(users =>{
// 			resetUsersList()
// 			setTimeout(() => {
// 				users.data.forEach(user =>{
// 					userListContainer.innerHTML += userCard(user) 
// 				})
// 				spinner.style.display = 'none'
// 			}, 100)
			
// 		})
// 	fetch(`${baseAPI}/users?page=2`)
// 		.then(response => response.json())
// 		.then(users =>{
// 			resetUsersList()
// 			setTimeout(() => {
// 				users.data.forEach(user =>{
// 					userListContainer.innerHTML += userCard(user) 
// 				})
// 				spinner.style.display = 'none'
// 			}, 100)
			
// 		})
// }

// getUsersList()



// const resetUsersList = () =>  userListContainer.innerHTML = ''

// const getSingleUser = (userID) =>{
// 	spinner.style.display = 'block'
// 	fetch(`${baseAPI}/users/${userID}`)
// 		.then(response => response.json())
// 		.then(users =>{
// 			resetUsersList()
// 			userListContainer.innerHTML += userCard(users.data) 
// 			spinner.style.display = 'none'
// 		})	
// 		.catch(e => console.log(e))
// }

// inpt.addEventListener('keyup', () => {
// 	userID = inpt.value
// 	if(userID != ''){
// 		fetch(`${baseAPI}/users?page=1`)
// 			.then(response => response.json())
// 			.then(users =>{
// 				resetUsersList()
// 				users.data.forEach(e => {
// 					if(e.first_name.toLowerCase().includes(inpt.value.toLowerCase())){
// 						console.log(e)
// 						getSingleUser(e.id)
// 					}
// 				})
// 				spinner.style.display = 'none'
// 			})
// 		fetch(`${baseAPI}/users?page=2`)
// 			.then(response => response.json())
// 			.then(users =>{
// 				resetUsersList()
// 				users.data.forEach(e => {
// 					if(e.first_name.toLowerCase().includes(inpt.value.toLowerCase())){
// 						console.log(e)
// 						getSingleUser(e.id)
// 					}
// 				})
// 				spinner.style.display = 'none'
// 			})
// 	}
// 	else{
// 		spinner.style.display = 'none'
// 		getUsersList()
// 	}
// })


// function sendRequest(method, url, body = null){
// 	return fetch(url).then(response =>{
// 		return response.json()
// 	})
// }
// sendRequest('GET', baseAPI)
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e))