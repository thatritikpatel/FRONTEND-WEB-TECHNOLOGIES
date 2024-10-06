const apikey = 'cvgfVqkhyfAbXT3oS9ATwvVtHeRAO7P8';

const getWeather = async (city_key) => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${city_key}?apikey=${apikey}`;

	const response = await fetch(base+query);
	const data = await response.json();

	return data[0];
};

const getCity = async (city) => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${apikey}&q=${city}`;

	const response = await fetch(base+query);
	const data = await response.json();

	return data[0];
};


