import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
