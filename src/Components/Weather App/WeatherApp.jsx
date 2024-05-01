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
                
            </div>
        </div>
    )
}
export default WeatherApp