const inptCity = document.querySelector('#input-city')
const searchButton = document.querySelector('#search-button')
const currentWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=`
const weatherForecastAPI = `http://api.openweathermap.org/data/2.5/forecast?q=`
const APPID = `5200b3651d93135a9e43ac34539a1500`
const textDiv = document.querySelector('#text-div')
const weatherMessageDiv = document.querySelector('#weather-message-div')
const photoDiv = document.querySelector('#photo-div')

searchButton.addEventListener('click', () => {
	const cityName = inptCity.value
	inptCity.value = ''
	fetch(`${currentWeatherAPI}${cityName}&APPID=${APPID}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			if(data.cod == "200"){
				const headerMessage = `Weather in ${data.name}, ${data.sys.country}:`
				const temperatureInCelsium = Math.round((data.main.temp - 273.15) * 100) / 100
				const temperatureMessage = `Temperature is ${temperatureInCelsium}°C`
				const textMessage = `${data.weather[0].main}. ${data.weather[0].description}`
				textDiv.innerHTML = `${headerMessage}</br> 
									 ${temperatureMessage}</br>
									 ${textMessage}`
				const weatherImage = document.createElement('img')
				weatherImage.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
				weatherImage.style.cssText = `display: block;
											  margin-left: auto;
											  margin-right: auto;`
				weatherMessageDiv.replaceChild(weatherImage, weatherMessageDiv.lastElementChild)
			}
			if(data.cod == "404"){
				if(weatherMessageDiv.lastElementChild.nodeName.toLowerCase() === 'img'){
					weatherMessageDiv.removeChild(weatherMessageDiv.lastElementChild)
				}
				textDiv.textContent = `Ooops, ${data.message}! Try again`

			}
		})
		.catch(error => {

		})
})
inptCity.addEventListener('keyup', function(event) {
	if (event.keyCode == 13) {
	    searchButton.click()
	}
})
