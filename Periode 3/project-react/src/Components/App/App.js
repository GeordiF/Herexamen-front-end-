import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import People from '../Characters/People';
import Detail from '../CharDetail/CharDetail';
import Add from '../AddChar/AddChar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Route path='*' component={Header} />
          <Route exact path='/' component={Home} />
          <Route exact path='/people' component={People} />
          <Route exact path='/add' component={Add} />
          <Route path='/people/detail/:name' component={Detail} />
          <Route path='*' component={Footer} />

      </div>
    );
  }
}

export default App;
