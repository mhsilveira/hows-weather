import React, { Component } from "react";
import Location from './components/Location/Location';
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Aside/>
        <Main>
          <Location/>
        </Main>
      </div>
    );
  }
}

export default App;