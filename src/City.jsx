import React from 'react'

const City = ({ city }) => {
    console.log(city);
  return (
    <div>
        <div className="w-[350px] rounded-md shadow mx-auto">
          <h2 className="text-5xl font-bold">{city.main.temp} °C</h2>
          <h1 className="text-3xl font-semibold">{city.name}</h1>
          <h3 className="text-2xl">{city.weather[0].main}</h3>
          <h4 className="text-2xl">Wind speed: {city.wind.speed}</h4>
        </div>
    </div>
  )
}

export default City;