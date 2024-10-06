const form = document.forms[0];
const detail = document.querySelector('#detail');

const updateUI = (data) => {
	const cityData = data.cityData;
	const weatherData = data.weatherData;

	detail.innerHTML = `
		<div id="city">${cityData.EnglishName}</div>
		<div id="condition">${weatherData.WeatherText}</div>
		<div id="temp">TEMP &deg;C ${weatherData.Temperature.Metric.Value}</div>	
	`;
};

const getCityInfo = async (city) => {
	const cityData = await getCity(city);
	const weatherData = await getWeather(cityData.Key); 

	return { cityData, weatherData };
}; 

form.addEventListener('submit', e => {
	e.preventDefault();

	const city = form.city.value.trim();
	form.reset();

	getCityInfo(city)
		.then((data)=>{updateUI(data)})
		.catch(err=>console.log(err));
});