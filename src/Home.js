import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './App.css';

class Home extends Component {
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
          <div className="column">
            <iframe src="https://player.twitch.tv/?autoplay=false&video=v325260286" frameborder="0" allowfullscreen="true" scrolling="no" height="300" width="500"></iframe><a className="twitch-desc" href="https://www.twitch.tv/videos/325260286?tt_content=text_link&tt_medium=vod_embed" /><span>Watch Highlight: Pawngrabbers.TV: Nathan makes an easy win much more exciting! from pghpawngrabbers on www.twitch.tv</span>
          </div>
          <div className="column">
            <iframe src="https://player.twitch.tv/?autoplay=false&video=v325260287" frameborder="0" allowfullscreen="true" scrolling="no" height="300" width="500"></iframe><a className="twitch-desc" href="https://www.twitch.tv/videos/325260287?tt_content=text_link&tt_medium=vod_embed" /><span>Watch Highlight: Pawngrabbers.TV: Nathan Forgets his Grob theory! from pghpawngrabbers on www.twitch.tv</span>
          </div>
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