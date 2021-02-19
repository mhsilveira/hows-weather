import React from "react";
import './Main.css';
import {Alerta, WeatherCard} from '../../style/global';
import {format} from 'date-fns';


const Main = ({forecast}) => {
  let content;
  // alert(typeof forecast);
  if (forecast) {
    let jstimestamp = (forecast.dt * 1000);
    let result      = format(new Date(jstimestamp), 'dd/MM/yyyy k:m');
    let temp_atual  = forecast.main.temp;
    content = 
      <WeatherCard>
        <p className="forecast_data_hora">{result}</p>
        <p className="forecast_lugar">{forecast.name}, {forecast.sys.country}</p>
        <p className="forecast_temp">{temp_atual.toFixed()}</p>
        <p className="forecast_desc">
          <img alt="Temp atual" src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}/>
          {forecast.weather[0].description}
        </p>
      </WeatherCard>;
  }

  return (
    <>
    <main className="weather-main">
      {content}
    </main>
    </>
  );
  
}

export default Main;