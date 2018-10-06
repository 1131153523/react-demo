import React, { Component } from 'react';
import axios from "axios";
import Header from "./common/header/index";
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact  component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
        
    );
  }
}

export default App;
