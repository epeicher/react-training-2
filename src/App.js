import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    api.getRepos().then(r => {
      this.setState({repos: r})
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ol>
          {this.state.repos && this.state.repos.map(t => <li key={t.id}>{t.name}</li>)}
          </ol>
      </div>
    );
  }
}

export default App;
