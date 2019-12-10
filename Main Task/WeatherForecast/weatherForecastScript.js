const inptCity = document.querySelector('#input-city')
const searchButton = document.querySelector('#search-button')
const currentWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=`
const weatherForecastAPI = `http://api.openweathermap.org/data/2.5/forecast?q=`
const APPID = `5200b3651d93135a9e43ac34539a1500`
const temperatureH2 = document.querySelector('#temperature-h2')

searchButton.addEventListener('click', () => {
	const cityName = inptCity.value
	fetch(`${currentWeatherAPI}${cityName}&APPID=${APPID}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const temperatureInCelsium = Math.round((data.main.temp - 273.15) * 100) / 100
			temperatureH2.textContent = `Temperature in ${cityName} is ${temperatureInCelsium}°C`
		})
})
