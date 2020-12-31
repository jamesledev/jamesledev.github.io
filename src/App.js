import './App.css';
import dayjs from 'dayjs';
import axios from 'axios';
import { useEffect, useState } from 'react';

function setWeatherHTML(weather) {
  if (weather.main) {
    return <>Current temp is {weather.main.temp}&deg;C </>;
  }
  return <></>;
}

function App() {
  const [weather, setWeather] = useState('');
  useEffect(() => {
    async function getWeather() {
      const response = await axios({
        method: 'get',
        url:
          'https://api.openweathermap.org/data/2.5/weather?q=northampton&appid=27e500df9db7db7c55da399ff11d427e&units=metric',
      });
      setWeather(response.data);
    }
    getWeather();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        Hello my name is James, this is the react test <br />
        Todays date is {dayjs().format('YYYY-MM-DD')} <br />
        {setWeatherHTML(weather)}
      </header>
    </div>
  );
}

export default App;
