import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>hello </h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
