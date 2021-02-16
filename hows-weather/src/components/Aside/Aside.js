import React from "react";
import './Aside.css';
import { Button } from '@material-ui/core';

const Aside = ({setDataIni, getDataAPI}) => {
  return (
    <>
      <aside className="weather-aside">
        <div className="weather-titulo">How's Weather?</div>
        <div className="weather-filtros">
          <strong>Selecione uma data para buscar a previsão do tempo: </strong>
          <input type="date" id="data_ini" defaultValue={new Date()} onChange={(e) => {setDataIni(e.target.value)}}  />
        </div>
        <Button variant="contained" color="primary" onClick={getDataAPI}>
          Buscar
        </Button>
      </aside>
    </>
  );
  
}

export default Aside;