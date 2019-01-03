import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Bio from './Bio';
import Stream from './Stream';
import Blog from './Blog';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bio">Bio</Link>
              </li>
              <li>
                <Link to="/stream">Stream</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a href="https://shop.spreadshirt.com/pghpawngrabbers" target="_blank">Shop</a>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={() => (<Home />)} />
          <Route path="/bio" component={() => (<Bio />)} />
          <Route path="/stream" component={() => (<Stream />)} />
          <Route path="/blog" component={() => (<Blog />)} />
        </div>
      </Router>
    );
  }
}

export default App;
