import React, { Component } from "react";
import { Spinner } from "react-rainbow-components";
import { Input } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 700
};

class Tracks2 extends Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    fetch("http://localhost:3000/playlists/", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(playlists => this.setState({ playlists: playlists }));
  };

  render() {
    if (this.state.playlists === undefined || this.state.playlists.length === 0)
      return (
        <div className="rainbow-p-vertical_xx-large">
          <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
          </div>
        </div>
      );
    return (
      <div style={{ padding: "0 0 80px 0" }}>
        {this.props.selectedPlaylist.map(track => (
          <div class="tracks-card tracks-card-1 ">
            <h2>{track.name}</h2>
            <img
              width="100%"
              alt="playlist"
              src={
                track.image.length === 0
                  ? "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png"
                  : track.image
              }
            ></img>
            <Input
              type="text"
              id="outlined-multiline-flexible"
              placeholder={"I chose " + track.name + " because..."}
              style={containerStyles}
              className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
              value={this.props.trackComment}
              onChange={event => this.props.handleTrackComment(track, event)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Tracks2;
