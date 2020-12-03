import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
<Route exact path="/" component ={ Home}/>
<Route path="/about" component={About}/>
    </div>
  );
}

export default App;
