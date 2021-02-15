import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alerta, WeatherCard} from '../style/global';
// REACT_APP_OPEN_WEATHER_API_KEY=bb1f21f8f4a1d0d8c6caf10c728aaa4f

const Location = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather]   = useState(false);
  const [error, setError]       = useState(false);

  const weatherData = async(lat, long) => {
    try {
      await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          lat: lat,
          lon: long,
          appid: "bb1f21f8f4a1d0d8c6caf10c728aaa4f",
          lang: 'pt',
          units: 'metric',
          format: 'json'
        }
      }).then(res => {
        // futuramente, pegar apenas da data que o usuario selecionar e passar ali pro includes
        const dailyData = res.data.list.filter(dailyForecast => dailyForecast.dt_txt.includes("18:00:00"));
        setWeather(dailyData);
      })
    } catch (error) {
      console.error(error);
      setError(true);
      if(error.response.status === 401){
        setError(error.response.statusText);
      }
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(true);
      weatherData(position.coords.latitude, position.coords.longitude);
    })
  }, []);

  return (
    <>
    { error &&
      <Alerta scenario="apikey">
        <h3>Error Text: {error}</h3>
      </Alerta>
    }
    { !location &&
      <Alerta scenario="location">
        <h3>É necessário habilitar a localização no browser para obter dados da API.</h3>
      </Alerta>
    }      
    { weather && weather.map(item => (
      console.log(item),
      <WeatherCard key={item.dt} temp="Rain">
        <div className="temperature">Temperatura{item.main.temp}</div>
        <div className="temp-desc">{item.weather[0].description}</div>
        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="icone"/>
        <div className="temperature">Clima: {item.weather[0].main}</div>
        <div className="temp-min">Mínima de {item.main.temp_min}ºC</div>
        <div className="temp-max">Máxima de {item.main.temp_max}ºC</div>
      </WeatherCard>
    ))
    }
    </>
  );
}

export default Location;
