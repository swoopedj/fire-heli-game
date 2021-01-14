import  React, { Component } from 'react';
import Game from './Game';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {

  render() {
    return (
      <Game {...this.props} />
    )
  }
};

App.propTypes = {
  helicopter: PropTypes.object.isRequired,
};

export default App;
