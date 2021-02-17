import React from "react";
import './Main.css';
import {Alerta, WeatherCard} from '../../style/global';

const Main = ({forecast}) => {
  let content;
  // alert(typeof forecast);
  if (!forecast) {
    content = <h1>Preencha uma data ao lado para buscar a previsão...</h1>;
  } else {
    content = 
    <WeatherCard>
      <p className="forecast_data_hora">{forecast.dt}</p>
      <p className="forecast_lugar">{forecast.name}, {forecast.sys.country}</p>
      <p className="forecast_temp">{forecast.main.temp}</p>
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