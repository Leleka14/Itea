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

const element = {};
element.info = {};
element.methods = {};
element.info.currentUser = sessionStorage.getItem('currentUser');
element.info.loginAndSignup = document.querySelector('#login-and-signup');
element.info.exitImage = document.querySelector('#exit');
element.info.cardContainer = document.querySelector('#profile')

element.methods.isLogged = (function(){
	if(element.info.currentUser){
		element.info.currentUser = JSON.parse(element.info.currentUser);
		element.info.loginAndSignup.style.display = 'none' 
		element.info.exitImage.style.display = 'block';
	}
	else{
		element.info.loginAndSignup.style.display = 'block';
	}
})()

element.info.exitImage.addEventListener('click', () => {
	sessionStorage.clear();
	document.location.reload(true);
})

if(element.info.currentUser){
	let singleCard = `
	<div class="card m-2" style="width: 25rem;">
	  <div class="card-body">
	  	<img src='${element.info.currentUser.image}' width=200px height=auto>
	    <h5 class="card-title">${element.info.currentUser.nickname}</h5>
	    <p class="card-text">${element.info.currentUser.name} ${element.info.currentUser.surname}</p>
	    <p class="card-text">${element.info.currentUser.email}</p>
	  </div>
	</div>
	`
	element.info.cardContainer.innerHTML = singleCard
}

const api = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-02&sortBy=publishedAt&apiKey=d6a3df778ec642b18e27cae0561ae130'
fetch(api)
.then(response => response.json())
.then(data => console.log(data.articles))



