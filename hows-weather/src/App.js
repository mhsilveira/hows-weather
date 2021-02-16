import React, { useState} from "react";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Swal from 'sweetalert2';
import axios from 'axios';
import './App.css';

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


const App = () => {
  const [dataIni, setDataIni]   = useState(new Date());
  const [forecast, setForecast] = useState(false);

  async function weatherData (lat, long){
    try {
      const URL_API = "https://api.openweathermap.org/data/2.5/weather";
      await axios.get(URL_API, {
        params: {
          lat: lat,
          lon: long,
          appid: "bb1f21f8f4a1d0d8c6caf10c728aaa4f",
          lang: 'pt',
          units: 'metric'
        }
      }).then(res => {
        // colocar em um state o retorno correto dos dados? 
        // setForecast(res);
        console.log(res);
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
  
  async function getDataAPI() {
    let data_busca = document.getElementById("data_ini").value;
    try {
      if(!data_busca){
        throw new Error("Selecione uma data para efetuar a busca...");
      }    
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

  return (
    <div className="container">
      <Aside setDataIni={setDataIni} getDataAPI={getDataAPI}/>
      <Main forecast={forecast}/>
    </div>
  );
}

export default App;