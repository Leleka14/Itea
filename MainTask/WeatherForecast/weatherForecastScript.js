const element = {}
element.info = {}
element.api = {}
element.methods = {}
element.info.currentUser = sessionStorage.getItem('currentUser')
element.info.loginAndSignup = document.querySelector('#login-and-signup')
element.info.exitImage = document.querySelector('#exit')
element.api.inptCity = document.querySelector('#input-city')
element.api.searchButton = document.querySelector('#search-button')
element.api.currentWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=`
element.api.weatherForecastAPI = `http://api.openweathermap.org/data/2.5/forecast?q=`
element.api.APPID = `5200b3651d93135a9e43ac34539a1500`
element.api.textDiv = document.querySelector('#text-div')
element.api.weatherMessageDiv = document.querySelector('#weather-message-div')
element.api.photoDiv = document.querySelector('#photo-div')

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

element.api.searchButton.addEventListener('click', () => {
		element.api.cityName = element.api.inptCity.value
		element.api.inptCity.value = ''
		fetch(`${element.api.currentWeatherAPI}${element.api.cityName}&APPID=${element.api.APPID}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			if(data.cod == "200"){
				if(element.info.currentUser){
					element.api.headerMessage = `Weather in ${data.name}, ${data.sys.country}:`
					element.api.temperatureInCelsium = Math.round((data.main.temp - 273.15) * 100) / 100
					element.api.temperatureMessage = `Temperature is ${element.api.temperatureInCelsium}°C`
					element.api.textMessage = `${data.weather[0].main}. ${data.weather[0].description}`
					element.api.textDiv.innerHTML = `${element.api.headerMessage}</br> 
										 ${element.api.temperatureMessage}</br>
										 ${element.api.textMessage}`
					element.api.weatherImage = document.createElement('img')
					element.api.weatherImage.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
					element.api.weatherImage.style.cssText = `display: block;
												  margin-left: auto;
												  margin-right: auto;`
					element.api.weatherMessageDiv.replaceChild(element.api.weatherImage, element.api.weatherMessageDiv.lastElementChild)

				}
				else{
					element.api.textDiv.textContent = `Please Log In to see weather forecast in ${element.api.cityName}`
				}
			}
			if(data.cod == "404"){
				if(element.api.weatherMessageDiv.lastElementChild.nodeName.toLowerCase() === 'img'){
					element.api.weatherMessageDiv.removeChild(weatherMessageDiv.lastElementChild)
				}
				element.api.textDiv.textContent = `Ooops, ${data.message}! Try again`

			}
		})
		.catch(error => {
			console.log(error)
		})
	}
	
)
element.api.inptCity.addEventListener('keyup', function(event) {
	if (event.keyCode == 13) {
	    element.api.searchButton.click()
	}
})


