// const baseAPI = 'https://reqres.in/api';
// const loginModule = {};

// // const utilsModule = {
// //     requestApi: function (url, method, headers, body) {
// //         // const apiAdress = url;
// //         // const methodApi = method;
// //         // const reqHeaders = body;
// //         // const body = body;
// //         fetch(apiAdress,{
// //         	method: method ? method: 'GET',
// //         	body
// //         })
// //     }
// // };

// loginModule.elements = {
//     emailInput: document.querySelector('#exampleInputEmail1'),
//     passwordInput: document.querySelector('#exampleInputPassword1'),
//     registerBtn: document.querySelector('.btn.btn-primary'),
// };

// loginModule.listeners = {
//     registerListener: function(){
//         loginModule.elements.registerBtn.addEventListener('click', loginModule.methods.registerNewUser);
//     }
// }

// loginModule.methods = {
//     registerNewUser: function () {
//         const user = loginModule.methods.collectUserData();
//         if(user && user.email && user.password){
//         	// return utilsModule.requestApi(`${baseAPI}/register`, 'POST', null, user)
//         	fetch(`${baseAPI}/register`, {
//                 method: 'POST',
//                 headers:{
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(user)
//             })
//             .then(result => json.result)
//             .then(response => {
//                 if(response && response.id && response.token){
//                     location.href = ''
//                 }
//             })
//         }
//     },
//     collectUserData: function(){
//     	userData = {
//     		email: loginModule.elements.emailInput.value,
//     		password: loginModule.elements.passwordInput.value
//     	}
//         return userData
//     }
// };

// function init(){
//     loginModule.listeners.registerListener();
// }

// init();
const element = {}
element.info = {}
element.methods = {}
element.info.array = []
element.info.obj = {}
element.info.emailInput = document.querySelector('#input-email')
element.info.passwordInput = document.querySelector('#input-password')
element.info.submitButton = document.querySelector('#submit-button')
element.info.usersInfo = localStorage.getItem('information')
element.info.currentUser = sessionStorage.getItem('currentUser')

element.methods.isLogged = (function(){
    if(element.info.currentUser){
        element.info.currentUser = JSON.parse(element.info.currentUser)
        document.querySelector('#all-form').innerHTML = 'You are logged in'
    }
})()

element.methods.takingData = (function() {
    if (element.info.usersInfo) {
        element.info.array = JSON.parse(element.info.usersInfo)

    }
})()

element.info.submitButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    element.info.array.forEach((e)=>{
        if(element.info.emailInput.value === e.email && element.info.passwordInput.value === e.password){
            element.info.obj = e
            sessionStorage.setItem('currentUser', JSON.stringify(element.info.obj))
            location.href = "../mainTaskIndex.html"
        }
    })
})

