
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