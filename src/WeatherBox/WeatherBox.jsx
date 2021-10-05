import { useState, useEffect, useRef } from 'react';
import Search from '../Search/Search';
import Info from '../Info/Info';

const api = {
  key: '1fd834a005e103644a2bc3e131f251ab',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function WeatherBox() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');

  const mounted = useRef(false);
  if (!mounted.current) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserPosition, handleError);
    } else {
      handleError();
    }
  }

  function handleError(error) {
    error
      ? setWeather({ message: 'Your browser is not supporting geolocation' })
      : setWeather({ message: error.message });
  }

  useEffect(() => {
    mounted.current = true;
  }, []);

  function getUserPosition(position) {
    const { longitude, latitude } = position.coords;
    searchForUserWeather(longitude, latitude);
  }

  function searchForUserWeather(longitude, latitude) {
    fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }

  function searchForWeather() {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }

  return (
    <div className="weather-box">
      <Search search={() => searchForWeather()} setQuery={setQuery} />
      <Info weather={weather} />
    </div>
  );
}

export default WeatherBox;
