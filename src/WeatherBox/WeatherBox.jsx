import { useState } from 'react';
import Search from '../Search/Search';
import Info from '../Info/Info';

// import "./weather-box.css";

const api = {
  key: 'af342bb316a547e15be0a79e5bb55c58',
  base: 'https://api.openweathermap.org/data/2.5/',
};
function WeatherBox() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  console.log(query);
  function search() {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }

  return (
    <div className="weather-box">
      <Search search={() => search()} setQuery={setQuery} />
      <Info weather={weather} />
    </div>
  );
}

export default WeatherBox;
