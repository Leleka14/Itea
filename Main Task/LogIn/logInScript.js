const baseAPI = 'https://reqres.in/api';
const loginModule = {};

// const utilsModule = {
//     requestApi: function (url, method, headers, body) {
//         // const apiAdress = url;
//         // const methodApi = method;
//         // const reqHeaders = body;
//         // const body = body;
//         fetch(apiAdress,{
//         	method: method ? method: 'GET',
//         	body
//         })
//     }
// };

loginModule.elements = {
    emailInput: document.querySelector('#exampleInputEmail1'),
    passwordInput: document.querySelector('#exampleInputPassword1'),
    registerBtn: document.querySelector('.btn.btn-primary'),
};

loginModule.listeners = {
    registerListener: function(){
        loginModule.elements.registerBtn.addEventListener('click', loginModule.methods.registerNewUser);
    }
}

loginModule.methods = {
    registerNewUser: function () {
        const user = loginModule.methods.collectUserData();
        if(user && user.email && user.password){
        	// return utilsModule.requestApi(`${baseAPI}/register`, 'POST', null, user)
        	fetch(`${baseAPI}/register`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(result => json.result)
            .then(response => {
                if(response && response.id && response.token){
                    location.href = ''
                }
            })
        }
    },
    collectUserData: function(){
    	userData = {
    		email: loginModule.elements.emailInput.value,
    		password: loginModule.elements.passwordInput.value
    	}
        return userData
    }
};

function init(){
    loginModule.listeners.registerListener();
}

init();

