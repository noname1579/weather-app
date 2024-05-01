import React from "react";
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import sun_icon from '../Assets/sun.png'
import cloudy_icon from '../Assets/cloudy.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import storm_icon from '../Assets/storm.png'
import wind_icon from '../Assets/wind.png'


const WeatherApp = () => {
    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon">
                    <img src={search_icon} />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloudy_icon} alt="" />
            </div>
            <div className="weather-temp">10°C</div>
            <div className="weather-location">Moscow</div>
            <div className="data-container">
                <div className="element">
                    <img src={rain_icon} className="icon" />
                    <div className="data">
                        <div className="humidity-percent">50%</div>
                        <div className="text">Влажность</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} className="icon" />
                    <div className="data">
                        <div className="humidity-percent">20 км/ч</div>
                        <div className="text">Скорость ветра</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherApp