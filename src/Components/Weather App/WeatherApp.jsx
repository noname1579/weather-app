import React, { useState } from "react";
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import sun_icon from '../Assets/sun.png'
import cloudy_icon from '../Assets/cloudy.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import humidity_icon from '../Assets/humidity.png'
import snow_icon from '../Assets/snow.png'
import storm_icon from '../Assets/storm.png'
import wind_icon from '../Assets/wind.png'


const WeatherApp = () => {

    let api_key = '5340ca6cc93667d2919c118e9dbdc0ab';

    const [wicon, setWicon] = useState(cloudy_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-speed');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = Math.floor(data.main.humidity)+'%';
        wind[0].innerHTML = Math.floor(data.wind.speed)+' км/ч';
        temperature[0].innerHTML = Math.floor(data.main.temp)+'°C';
        location[0].innerHTML = data.name;

        if (data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
        {
            setWicon(sun_icon);
        }
        else if (data.weather[0].icon==='02d' || data.weather[0].icon==='02n')
        {
            setWicon(cloudy_icon);
        }
        else if (data.weather[0].icon==='03d' || data.weather[0].icon==='03n')
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==='04d' || data.weather[0].icon==='04n')
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==='09d' || data.weather[0].icon==='09n')
        {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==='10d' || data.weather[0].icon==='10n')
        {
            setWicon(storm_icon);
        }
        else if (data.weather[0].icon==='13d' || data.weather[0].icon==='13n')
        {
            setWicon(snow_icon);
        }
        else
        {
            setWicon(sun_icon);
        }
    }

    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Введите город" />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} />
            </div>
            <div className="weather-temp">0°C</div>
            <div className="weather-location">City</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} className="icon" />
                    <div className="data">
                        <div className="humidity-percent">0%</div>
                        <div className="text">Влажность</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} className="icon" />
                    <div className="data">
                        <div className="wind-speed">0 км/ч</div>
                        <div className="text">Скорость ветра</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherApp