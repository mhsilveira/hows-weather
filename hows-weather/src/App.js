import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather]   = useState(false);

  const weatherData = async(lat, long) => {
    const apiData = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(apiData.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(true);
      weatherData(position.coords.latitude, position.coords.longitude);
    })
  }, []);

  if(!location){
    return(
      <>
        <div>Você precisa habilitar a localização no browser...</div>
      </>
    )
  }else if(!weather){
    return(
      <>
        Buscando dados do clima...
      </>
    )
  }
  else{
    console.log(weather['weather'][0]['description']);
    const descricao = weather['weather'][0]['description'];
    const arr_weather = weather['main'];
    return (
      <div>
        <h1>Bem vindo ao HOW'S WEATHER!</h1>
        <h4> O clima nas suas coordenadas está: {descricao}</h4>
        <ul>
          <li>Temperatura atual: {arr_weather['temp']} GRAIS</li>
          <li>Temperatura mínima: {arr_weather['temp_min']} GRAIS</li>
          <li>Temperatura máxima: {arr_weather['temp_max']} GRAIS</li>
        </ul>
      </div>
    );
  }
}

export default App;
