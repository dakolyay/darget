import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import store from './store';
import './App.css';
import Mainpage from './components/mainpage/Main';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Room from './components/rooms/Room';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
                <Header/>
                <Route path="/" exact component={Mainpage}></Route>
                <Route path="/:room_id" exact component={Room}></Route>
                <Footer/>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;