import { useState, useEffect, useRef } from 'react';
import Search from '../Search/Search';
import Info from '../Info/Info';

const api = {
  key: '1fd834a005e103644a2bc3e131f251ab',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function WeatherApp(): JSX.Element {
  const [weather, setWeather] = useState({ message: '...' });
  const [query, setQuery] = useState('');

  // Use useFef to preserve mounted.current value for subsequent renders.
  const mounted = useRef(false);
  if (!mounted.current) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getUserPosition, handleError);
    } else {
      handleError();
    }
  }

  interface Error {
     message: string
  }

  function handleError(error?: Error) {
    error
      ? setWeather({ message: error.message })
      : setWeather({ message: 'Your browser is not supporting geolocation' });
  }

  // Pass empty array as second argument so it never needs to re-run after first mount.
  useEffect(() => {
    // Set mounted.current to true after first render.
    mounted.current = true;
  }, []);

  type Position = {
    coords: {
      longitude: number;
      latitude: number;
    };
  };

  function getUserPosition(position: Position) {
    const { longitude, latitude } = position.coords;
    searchForUserWeather(longitude, latitude);
  }

  function searchForUserWeather(longitude: number, latitude: number) {
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

export default WeatherApp;
