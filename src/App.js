import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  }, {
    id: 2,
    title: 'Spider Man'
  }, {
    id: 3,
    title: 'Ip Man'
  }, {
    id: 4,
    title: 'Big Fish'
  }
];


// modern React syntax
class App extends Component {  // or extends React.Component

  state = {
    toggle: true,
    username: 'David',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      
        {movies.map((movie) => <Movie key={movie.id} mov={movie} /> )}      
      </div>
    );
  }
}


export default App;
