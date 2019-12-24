// fetch("https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "4ff526cfbemsh513da0b292e27edp16f160jsn5f3975bb4eb1"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// const nav = document.querySelector('#login-and-signup')
// nav.style.display = 'none'

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