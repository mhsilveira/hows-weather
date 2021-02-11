import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MeuBotao from '../style/global';

// REACT_APP_OPEN_WEATHER_API_KEY=bb1f21f8f4a1d0d8c6caf10c728aaa4f

const Location = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather]   = useState(false);
  const [error, setError]       = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(true);
      weatherData(position.coords.latitude, position.coords.longitude);
    })
  }, []);

  const weatherData = async(lat, long) => {
    try {
      const apiData = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: lat,
          lon: long,
          appid: "bb1f21f8f4a1d0d8c6caf10c728aaa4f",
          lang: 'pt',
          units: 'metric'
        }
      });
      setWeather(apiData.data);
      console.log(weather.main);
    } catch (error) {
      if(error.response.status === 401){
        setError(error.response.statusText);
      }
    }
  }


    return (
      <>
      { error &&
        <MeuBotao>
          <h3>Error Text: {error}</h3>
        </MeuBotao>
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
