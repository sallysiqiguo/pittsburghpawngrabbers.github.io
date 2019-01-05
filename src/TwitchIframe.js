import React, { Component } from 'react';

import './App.css';

class TwitchIframe extends Component {
  render() {
    return (
      <div className="column">
        <iframe src={`https://player.twitch.tv/?autoplay=false&video=${this.props.video.id}`} frameborder="0" allowfullscreen="true" scrolling="no" height="300" width="500"></iframe><a className="twitch-desc" href={`https://www.twitch.tv/videos/${this.props.video.id}?tt_content=text_link&tt_medium=vod_embed`} /><span>Watch Highlight: Pawngrabbers.TV: {this.props.video.title} from pghpawngrabbers on www.twitch.tv</span>
      </div>
    );
  }
}

export default TwitchIframe;
