import React, { Component } from "react";
import "./App.css";

import Posts from "./components/Posts";
import PostItem from "./components/PostItem";
import { Provider } from 'react-redux';

import store from './store';
// const store = createStore(() => [], {}, applyMiddleware());



class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
                <br/>
                <br/>
              <PostItem />
              <Posts />
            </header>
          </div>
        </Provider>
    );
  }
}

export default App;
