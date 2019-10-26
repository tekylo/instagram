import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Login from './Login/Login'
import configureStore from './configStore'
import Posts from './Posts/Posts';

function App() {
  return (
    <Provider store= {configureStore()}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
