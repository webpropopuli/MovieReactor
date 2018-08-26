import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
 
  }


  render() {
    return (
      <div key={this.props.mov.id}>
        <h3>{this.props.mov.title}</h3>
        <p>{this.props.desc}</p>
      </div>            
    )
  }
}
