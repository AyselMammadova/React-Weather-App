import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import City from './City';

function App() {
  const key = "469a2d487b18684def045a04c93e7a85";
  const [search, setSearch] = useState('Baku');
  const [city, setCity] = useState();

  
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        if(response) {
          setCity(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    getWeather();
    
  },[search]);
 
  return (
  <div className="App">
      <p>Search place and see weather</p>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text" placeholder="Type here..." />

      {city && <City city={city} />}
  </div>
  );
}

export default App;