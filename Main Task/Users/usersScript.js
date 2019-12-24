
const element = {}
element.info = {}
element.methods = {}
element.info.currentUser = sessionStorage.getItem('currentUser')
element.info.loginAndSignup = document.querySelector('#login-and-signup')
element.info.exitImage = document.querySelector('#exit')

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

const baseAPI = ' https://reqres.in/api'
const userListContainer = document.querySelector('#user-list-container')
const btn = document.querySelector('#search-button')
const spinner = document.querySelector('#spinner')
const inpt = document.querySelector('#input-of-user-search')
const getUsersList = () => {
	spinner.style.display = 'block'
	fetch(`${baseAPI}/users?page=1`)
		.then(response => response.json())
		.then(users =>{
			resetUsersList()
			setTimeout(() => {
				users.data.forEach(user =>{
					userListContainer.innerHTML += userCard(user) 
				})
				spinner.style.display = 'none'
			}, 100)
			
		})
	fetch(`${baseAPI}/users?page=2`)
		.then(response => response.json())
		.then(users =>{
			resetUsersList()
			setTimeout(() => {
				users.data.forEach(user =>{
					userListContainer.innerHTML += userCard(user) 
				})
				spinner.style.display = 'none'
			}, 100)
			
		})
}

getUsersList()

const userCard = (user) =>{
	let singleCard = `
	<div class="card m-2" style="width: 18rem;">
	  <img src="${user.avatar}" class="card-img-top" alt="...">
	  <div class="card-body">
	    <h5 class="card-title">${user.email}</h5>
	    <p class="card-text">${user.first_name} ${user.last_name}</p>
	    <p class="card-text"> User ID: ${user.id}</p>
	  </div>
	</div>
	`	
	
	return singleCard;
} 

const resetUsersList = () =>  userListContainer.innerHTML = ''

const getSingleUser = (userID) =>{
	spinner.style.display = 'block'
	fetch(`${baseAPI}/users/${userID}`)
		.then(response => response.json())
		.then(users =>{
			resetUsersList()
			userListContainer.innerHTML += userCard(users.data) 
			spinner.style.display = 'none'
		})	
		.catch(e => console.log(e))
}

inpt.addEventListener('keyup', () => {
	userID = inpt.value
	if(userID != ''){
		fetch(`${baseAPI}/users?page=1`)
			.then(response => response.json())
			.then(users =>{
				resetUsersList()
				users.data.forEach(e => {
					if(e.first_name.toLowerCase().includes(inpt.value.toLowerCase())){
						console.log(e)
						getSingleUser(e.id)
					}
				})
				spinner.style.display = 'none'
			})
		fetch(`${baseAPI}/users?page=2`)
			.then(response => response.json())
			.then(users =>{
				resetUsersList()
				users.data.forEach(e => {
					if(e.first_name.toLowerCase().includes(inpt.value.toLowerCase())){
						console.log(e)
						getSingleUser(e.id)
					}
				})
				spinner.style.display = 'none'
			})
	}
	else{
		spinner.style.display = 'none'
		getUsersList()
	}
})


// function sendRequest(method, url, body = null){
// 	return fetch(url).then(response =>{
// 		return response.json()
// 	})
// }
// sendRequest('GET', baseAPI)
// 	.then(data => console.log(data))
// 	.catch(e => console.log(e))