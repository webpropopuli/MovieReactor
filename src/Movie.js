import React, { Component } from 'react';


export default class Movie extends Component {

  render() {
    return (
      <div key={this.props.mov.id}>
        {this.props.mov.title}
      </div>            
    )
  }
}
