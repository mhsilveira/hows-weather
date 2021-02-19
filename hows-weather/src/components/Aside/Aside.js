import React from "react";
import './Aside.css';
import { Button } from '@material-ui/core';
import LocationInput from '../LocationInput/LocationInput';

const Aside = ({address, setAddress, weatherData}) => {
  
  return (
    <>
      <aside className="weather-aside">
        <div className="weather-titulo">How's Weather?</div>
        <div className="weather-filtros">
          <strong>Busque uma localidade para checar seu clima... </strong>
          <LocationInput setAddress={setAddress}/>
        </div>
        <Button variant="contained" color="primary" onClick={() => {weatherData(address)}}>
          Buscar
        </Button>
      </aside>
    </>
  )
  
}

export default Aside;