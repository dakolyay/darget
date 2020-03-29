import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import store from './store';
import './App.css';
import Mainpage from './components/mainpage/Main';

// import Header from '../src/components/header/header'
// import Footer from '../src/components/footer/footer'
// import Category from '../src/components/category/category'
// import Article from '../src/components/article/article'
// import Mainpage from './components/mainpage/main'
// import Registration from './components/registration/registration'
// import Login from './components/login/login'
// import articleCreate from './components/artclecreate/articleCreate'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
                {/* <Header/> */}
                <Route path="/" exact component={Mainpage}></Route>
                {/* <Footer/> */}
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;