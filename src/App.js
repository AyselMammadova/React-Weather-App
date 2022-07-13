import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import City from './City';

function App() {
  const key = "469a2d487b18684def045a04c93e7a85";
  const [search, setSearch] = useState('');
  const [city, setCity] = useState();
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
   getWeather();
  },[search]);
 
  return (
  <div className="App">
    <div style={{padding: "50px 0"}}>
      Search city and see weather <br />
      <input 
        onChange={(e) => setSearch(e.target.value)}
        type="text" placeholder="Placeholder"
        style={{marginTop: "10px"}}
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded"
      />
      {city && <City city={city} />}
    </div>
  </div>
  );
}

export default App;
