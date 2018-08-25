import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const myTitle = "The super awesome React Thing"

// modern React syntax
class App extends Component {  // or extends React.Component

  state = {
    toggle: true,
    username: 'David',
    input2: 'fish'
  }

 //Called by <button onClick=>, this is a method on the component
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  } 

submit = () => {
    console.log(this.myText.value)
}

updateInput = (event) => {
    this.setState({
      username: event.target.value.trim()
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome txtTitle={myTitle} usr={this.state.username}/>
        </header>
        <p className="App-intro">
          I'm still a freakin paragraph.
        </p>
          <input type='myText' onChange={this.updateInput} value={this.state.username}  />
          <input type='myText' ref={(input) => this.myText = input } />
          <button onClick={this.submit}>Show value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const {txtTitle, usr} = this.props   //'text' here is the propname getting passed in
    return(
      <h1 className="App-title">{txtTitle} by {usr}!</h1> 
    )
  }
}

export default App;
