import React, { useState} from "react";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Swal from 'sweetalert2';
import axios from 'axios';
import './App.css';

/*
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getPosition(options) {
  return new Promise((resolve, reject) => 
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}

async function getDataAPI() {
  try {
    await getPosition(options)
    .then((position) => {
      weatherData(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      throw new Error(err.message);
    })
  } catch (error) {
    Swal.fire({
      title: 'Oooops, algo errado ocorreu!',
      text: error,
      icon: 'error',
      confirmButtonText: 'Entendi'
    })
    return false;
  }
}
*/

const App = () => {
  const [forecast, setForecast] = useState("");
  const [address, setAddress] = useState("");

  
  async function weatherData(location){
    try {
      const URL_API = "https://api.openweathermap.org/data/2.5/weather";
      await axios.get(URL_API, {
        params: {
          lat: location["lat"],
          lon: location["lng"],
          appid: "bb1f21f8f4a1d0d8c6caf10c728aaa4f",
          lang: 'pt',
          units: 'metric'
        }
      }).then(res => {
        setForecast(res.data);
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return false;
    }
  }
  
  return (
    <div className="container">
      <Aside address={address} setAddress={setAddress} weatherData={weatherData}/>
      {
        forecast && (
          <Main forecast={forecast}/>
        )
      }
    </div>
  );
}

export default App;