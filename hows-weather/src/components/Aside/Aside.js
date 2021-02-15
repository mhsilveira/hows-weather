import React, { Component } from "react";
import './Aside.css';
import { Button } from '@material-ui/core';

class Aside extends Component {
  render() {
    return (
      <>
        <aside className="weather-aside">
          <div className="weather-titulo">How's Weather?</div>
          <div className="weather-filtros">
            <strong>Selecione uma data para buscar a previsão do tempo: </strong>
            <input type="date" id="data_ini" />
          </div>
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </aside>
      </>
    );
  }
}

export default Aside;