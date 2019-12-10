const loginInputField = document.querySelector('#input-login-field')
const passwordInputField = document.querySelector('#input-password-field')
const submitButton = document.querySelector('#submit-button')
const baseAPI = ' https://reqres.in/api/register'
let user = {}
submitButton.addEventListener('click', () =>{
	if(loginInputField.textContent != '' && passwordInputField != ''){
		user.name = loginInputField.textContent
		user.password = passwordInputField.textContent
		fetch(baseAPI, {
			method: 'POST',
			headers: {
    			'Content-Type': 'application/json;charset=utf-8'
  			},
  			body: JSON.stringify(user)
		})
		.then(response => response.json)
		.then(data => console.log(data))
	}
})