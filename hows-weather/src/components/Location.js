import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
          appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
          lang: 'pt',
          units: 'metric'
        }
      });
      if(apiData.response.status !== 200){
        throw new Error()
      }
      setWeather(apiData.data);

    } catch (error) {
      if(error.response.status === 401){
        setError(error.response.statusText);
      }
    }
  }

  return(
    <>
      {error ? (
        <div>{error}</div>
      ) : ('')}
    </>
  )

}

export default Location;
