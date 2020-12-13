import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edita <code>src/App.js</code> para hacer algún ajuste y seguir probando
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <h3>
            Aprendiendo algo nuevo en 2020, un año que será recordado por mucho tiempo, probando Webhook para Jenkins
          </h3>
        </header>
      </div>
    );
  }
}

export default App;
