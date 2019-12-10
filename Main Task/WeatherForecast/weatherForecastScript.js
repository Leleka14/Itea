const inptCity = document.querySelector('#input-city')
const searchButton = document.querySelector('#search-button')
const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?q=`
const APIID = `5200b3651d93135a9e43ac34539a1500`
const temperatureh2 = document.querySelector('#temperature-h2')

searchButton.addEventListener('click', () => {
	const cityName = inptCity.value
	fetch(`${weatherAPI}${cityName}&APPID=${APIID}`)
		.then(response => response.json())
		.then(weather => {
			console.log(weather)
			const temperatureInCelsium = Math.round((weather.list[0].main.temp - 273.15) * 100) / 100
			temperatureh2.textContent = `Temperature in ${cityName} is ${temperatureInCelsium}°C`
		})
})

