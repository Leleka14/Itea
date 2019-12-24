// const loginInputField = document.querySelector('#input-login-field')
// const passwordInputField = document.querySelector('#input-password-field')
// const submitButton = document.querySelector('#submit-button')
// const baseAPI = ' https://reqres.in/api/register'
// let user = {}
// submitButton.addEventListener('click', () =>{
// 	if(loginInputField.value != '' && passwordInputField.value != ''){
// 		user.name = loginInputField.value
// 		user.password = passwordInputField.value
// 		console.log(user)
// 		fetch(baseAPI, {
// 			method: 'POST',
// 			headers: {
//     			'Content-Type': 'application/json;charset=utf-8'
//   			},
//   			body: JSON.stringify(user)
// 		})
// 		.then(response => response.json)
// 		.then(data => console.log(data))
// 	}
// })

const element = {}
element.info = {}
element.methods = {}
element.info.array = []
element.info.formElement = document.querySelector('form')
element.info.allElements = document.querySelectorAll('.form-control')
element.info.imageMessage = document.querySelector('#confirmed')
element.info.textMessage = document.querySelector('#text-message')
element.info.keys = ['name', 'surname', 'nickname', 'email', 'password']
element.info.usersInfo = localStorage.getItem('information')

// element.info.name = document.querySelector('#input-name')
// element.info.surname = document.querySelector('#input-surname')
// element.info.nickname = document.querySelector('#input-nickname')
// element.info.email = document.querySelector('#input-email')
// element.info.password = document.querySelector('#input-password')
// element.info.password2 = document.querySelector('#input-password2')

element.methods.takingData = (function() {
    if (element.info.usersInfo) {
        element.info.array = JSON.parse(element.info.usersInfo)
    }
})()

element.info.formElement.addEventListener('submit', evt => {
    evt.preventDefault();
    element.info.obj = {}
    element.info.data = Array.prototype.map.call(element.info.allElements, x => x.value.trim())
    element.info.data.pop()
    if (element.info.data.every(element.methods.check)) {
        if (element.info.allElements[element.info.allElements.length - 1].value.trim() === element.info.allElements[element.info.allElements.length - 2].value.trim()) {
            element.info.keys.forEach((key, i) => element.info.obj[key] = element.info.data[i]);
            element.info.array.push(element.info.obj)
            sessionStorage.setItem('currentUser', JSON.stringify(element.info.obj))
            localStorage.setItem('information', JSON.stringify(element.info.array))
            element.info.formElement.style.display = 'none'
            element.info.imageMessage.style.display = 'block'
            let i = 3
            setInterval(() => {
                element.info.textMessage.textContent = `You will be redirected to your new profile in ${i}...`
                i--
                if (i === -1) {
                    location.href = "../mainTaskIndex.html"
                }
            }, 1000)

        } else {
            alert('Passwords do not match')
        }
    } else {
        alert('Fill in all fields')
    }
})

element.methods.check = (elem) => {
    return elem != ''
}































// if( element.info.name.value &&
// 	element.info.surname.value &&
// 	element.info.nickname.value &&
// 	element.info.email.value &&
// 	element.info.password.value &&
// 	element.info.password2.value
// 	){
// 	if(element.info.password.value.trim() === element.info.password2.value.trim()){
// 		element.info.obj.name = element.info.name.value.trim()
// 		element.info.obj.surname = element.info.surname.value.trim()
// 		element.info.obj.nickname = element.info.nickname.value.trim()
// 		element.info.obj.email = element.info.email.value.trim()
// 		element.info.obj.password = element.info.password.value.trim()
// 		element.info.array.push(element.info.obj)
// 	}
// 	else{
// 		console.log('notok')
// 	}
// }
// else{
// 	console.log('Not ok')
// }