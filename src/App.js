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
          <div className="container">
            <div className="header">
              <div className="title-div">
                <div id="top-logo">
                  <a href="/"><img src={require('./images/pawngrabbers_main.png')} width="50" height="50" /></a>
                </div>
                <div id="title-text">Pittsburgh Pawngrabbers</div>
              </div>
              <nav id="nav-bar">
                <ul>
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
            </div>
            <div className="cover-photo-div">
              <a href="#"> <img className="cover-photo" src={require("./images/TwitchCoverPGH.jpg")} alt="Cover Photo" /> </a>
            </div>

            <hr></hr>
          
            <Route path="/" exact component={() => (<Home />)} />
            <Route path="/bio" component={() => (<Bio />)} />
            <Route path="/stream" component={() => (<Stream />)} />
            <Route path="/blog" component={() => (<Blog />)} />
          </div>
          
          <div className="fixed">
            <div className="socialmedia">

              <div className="button">
                <a href="https://www.facebook.com/PGHpawngrabbers/">
                  <img src={require('./images/facebooklogo.png')} alt="Facebook" width="30" height="30" />
                </a>
              </div>

              <div className="button">
                <a href="https://twitter.com/pghpawngrabbers?lang=en">
                  <img src={require('./images/twitterlogo.png')} alt="Twitter" width="30" height="30" />
                </a>
              </div>

              <div className="button">
                <a href="https://www.twitch.tv/pghpawngrabbers">
                  <img src={require('./images/twitchlogo.png')} alt="Twitch" width="30" height="30" />
                </a>
              </div>

              <div className="button">
                <a href="https://www.youtube.com/channel/UC0HxgtAm7xXKNN_zl5_hJLA">
                  <img src={require('./images/youtubelogo.png')} alt="Youtube" width="30" height="30" />
                </a>
              </div>

              <div className="button">
                <a href="https://www.instagram.com/pghpawngrabbers/">
                  <img src={require('./images/insta.png')} alt="Instagram" width="30" height="30" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
