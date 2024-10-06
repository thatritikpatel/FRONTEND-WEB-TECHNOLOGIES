const form = document.forms[0];
const detail = document.querySelector('#detail');
const time = document.querySelector('#time');
const container = document.querySelector('#container');
const weather_icon = document.querySelector('#weather_icon');

const updateUI = (data) => {
	console.log(data);

	//const cityData = data.cityData;
	//const weatherData = data.weatherData;

	//destructure object
	const { cityData,weatherData } = data;

	detail.innerHTML = `
		<div id="city">${cityData.EnglishName}</div>
		<div id="condition">${weatherData.WeatherText}</div>
		<div id="temp">TEMP &deg;C ${weatherData.Temperature.Metric.Value}</div>	
	`;

	if(container.classList.contains('hide')){
		container.classList.remove('hide');
	}

	let timeSrc = null;
	if(weatherData.IsDayTime){
		timeSrc = 'images/day.svg';
	}else{
		timeSrc = 'images/night.svg';
	}
	
	time.setAttribute('src',timeSrc);

	const iconSrc = `images/icons/${weatherData.WeatherIcon}.svg`;
	weather_icon.setAttribute('src',iconSrc);
};

const getCityInfo = async (city) => {
	const cityData = await getCity(city);
	const weatherData = await getWeather(cityData.Key); 
	
	//object shorthand notation
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