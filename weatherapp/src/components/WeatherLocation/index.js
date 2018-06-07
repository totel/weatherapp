import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY
} from './../../constants/weathers';


const data1 = {
	temperature: 20,
	weatherState: CLOUD,
	humidity: 10,
	wind: '10 m/s'
};


const location = "Buenos Aires,ar";
const api_key = "0a8d6037bde9dd450b2f07403ed03ca6"
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

class WeatherLocation extends Component {

	constructor() {
		super();
		this.state = {
			data: data1,
			city: "Buenos Aires"
		};
	}
	
	handleUpdateClick = () => {
		fetch(api_weather).then(data => {
			console.log(data);
			return data.json();
		}).then( weather_data => {
			debugger;
			const data = transformWeather(weather_data);
			this.setState({data});

			console.log(weather_data);
		});
		
		console.log('actualizado');
	}

	render = () => {
		const  {city, data} = this.state;
		return (
		<div className="weatherLocationCont">
			<Location city={city}/>
			<WeatherData data={data}/>
			<button onClick={this.handleUpdateClick}>Actualizar</button>
		</div>
		);
	};
	
};

export default WeatherLocation;