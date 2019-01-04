import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import TwitchIframe from './TwitchIframe'
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // use twitch api here?
      twitchLinks: [{
        id: "325260286",
        title: "Nathan makes an easy win much more exciting!"
      }, {
        id: "325260287", 
        title: "Nathan Forgets his Grob theory!"
      }]
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="home">
        <div ame="pad"></div>

        <div className="row">
          <div className="column">
            <div>
              {/* <a className="twitter-timeline" data-lang="en" data-height="1000" data-width="500" href="https://twitter.com/pghpawngrabbers?ref_src=twsrc%5Etfw">Tweets by pghpawngrabbers</a> 
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
              <TwitterTimelineEmbed sourceType="profile" screenName="pghpawngrabbers" options={{height: 1000, width: 500}} />
            </div>
          </div>
          <div className="column">
            <div className="news">
              <h2>News</h2>
              <div className="pad"></div>
              <p>   Welcome to Pittsburgh's Online Pro-Chess Team The Pittsburgh Pawngrabbers new website! This is your one-stop shop for everything Pawngrabber related.</p>
              <div className="pad"></div>
              <p>   This will be a feature of our most recent news updates/blog posts on the Blog page.</p>
            </div>
          </div>
        </div>

        <div className="pad"></div>

        <div className="clips"> <h2>Clips</h2> </div>

        <div className="pad"></div>

        <div className="row"> 
          {this.state.twitchLinks.map((video) => (<TwitchIframe video={video}/>))}
        </div>

        <div className="stats">
          <div className="pad"></div>
          <h2>Stats</h2>
          <div className="pad"></div>
        </div>
      </div>
    );
  }
}

export default Home;