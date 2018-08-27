import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

// modern React syntax
class App extends Component { // or extends React.Component

  state = {
    // toggle: true,
    movie: [], // filled by async call to MovieDB
  }

  // Fetch movie data from API
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=18de66666daf559c3b512dc197788994');
      const movList = await res.json();
      // console.log(movList);
      this.setState({
        movie: movList.results,
      });
    } catch (err) {
      console.log('FAIL on ..DidMount');
    }
  }

  render() {
    const mList = this.state.movie;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {mList.map(movie => <Movie mov={movie} />)}
      </div>
    );
  }
}

export default App;
