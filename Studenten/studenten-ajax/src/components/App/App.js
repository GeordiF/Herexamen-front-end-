import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import StudentOverview from '../StudentOverview/StudentOverview';
import StudentDetail from '../StudentDetail/StudentDetail';
import Header from '../Header/Header';
import StudentAdd from '../StudentAdd/StudentAdd';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/students' component={StudentOverview} />
        <Route exact path='/students/add' component={StudentAdd} />
        <Route path='/students/detail/:id' component={StudentDetail} />
      </div>
    );
  }
}

export default App;
