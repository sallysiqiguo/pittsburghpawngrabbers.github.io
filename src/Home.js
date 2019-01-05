import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import TwitchIframe from './TwitchIframe'
import './App.css';

class Home extends React.Component {
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
      }],
      rerender: "false"
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.props.rerender !== nextProps.rerender)
    return this.props.rerender !== nextProps.rerender; 
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
              
              <p> Entering their third season in the PRO Chess League, the Pittsburgh Pawngrabbers hope to continue last year’s success, despite being labeled as underdogs. In our inaugural year, we struggled to compete in a league filled with powerhouse teams such as the Saint Louis Archbishops. In fact, we had to compete in a preliminary match to ensure we had a spot in the league. This past year, however, was a different story. We placed 2nd in our division and therefore ensured ourselves a spot in the playoffs, but, unfortunately, were eliminated in the first round by the St Louis Archbishops.</p>

              <p> This year, like previous years, we are an organization that is committed to hard work and excellence. Our goal for this season is to replicate the success we found last season. We will be a force to be reckoned with in every match and, ultimately strive to not only reach the playoffs, but to also advance further within the playoffs. While we are a chess organization we also seek to recognize our Pittsburgh roots. Our mission, as an organization, is not only to have a lasting impact on the Pittsburgh chess community, but to have an impact on the Pittsburgh community as a whole.</p>
              
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