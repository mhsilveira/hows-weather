import React, { Component } from "react";
import Location from "./components/Location";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-component">
        <Location/>
      </div>
    );
  }
}

export default App;