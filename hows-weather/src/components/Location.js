import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Alerta, WeatherCard} from '../style/global';

// REACT_APP_OPEN_WEATHER_API_KEY=bb1f21f8f4a1d0d8c6caf10c728aaa4f

function LocationCards(list) {
  console.log(list);
  for (var x in list){
    console.log(x);
  }
  // console.log(list);
  return;
}

const Location = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather]   = useState(false);
  const [error, setError]       = useState(false);

  const weatherData = async(lat, long) => {
    try {
      const apiData = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          lat: lat,
          lon: long,
          appid: "bb1f21f8f4a1d0d8c6caf10c728aaa4f",
          lang: 'pt',
          units: 'metric'
        }
      }).then(res => {
        var data = res.data;
        setWeather(data);
        LocationCards(data.list);
      })
    } catch (error) {
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
    { weather && 
      <ul>
        <li></li>
      </ul>
    }
    </>
  );
}

export default Location;
