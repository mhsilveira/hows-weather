import React, { useState } from "react";
import './Aside.css';
import { Button } from '@material-ui/core';
import LocationInput from '../LocationInput/LocationInput';

const Aside = ({address, setAddress}) => {
  
  return (
    <>
      <aside className="weather-aside">
        <div className="weather-titulo">How's Weather?</div>
        <div className="weather-filtros">
          <strong>Busque uma localidade para checar seu clima... </strong>
          <LocationInput address={address} setAddress={setAddress}/>
        </div>
        <Button variant="contained" color="primary" onClick={() => alert(address)}>
          Buscar
        </Button>
      </aside>
    </>
  )
  
}

export default Aside;