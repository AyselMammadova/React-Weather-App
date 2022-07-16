import React from 'react';


const City = ({ city }) => {
    console.log(city);
  return (
    <div>
        <div className="result">
          <h2>Place: <span>{city.name}</span></h2>
          <h3>Temp: <span>{city.main.temp} °C</span></h3>
          <h3>Weather: <span>{city.weather[0].main}</span></h3>
          <h3>Wind speed: <span>{city.wind.speed}</span></h3>
          <h3>Country: <span>{city.sys.country}</span></h3>
        </div>
    </div>
  )
}

export default City;