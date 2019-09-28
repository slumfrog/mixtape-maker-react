import React from "react";
import ReactAplayer from "react-aplayer";
import { Spinner } from "react-rainbow-components";
import Grid from "@material-ui/core/Grid";

export default class App extends React.Component {
  state = {
    tracks: [],
    current_song: "",
    current_message: ""
  };

  mappedTracks = () => {
    const playlist = this.props.selectedMixtape[0].tracks;
    const tracks = playlist.map(track => ({
      name: track.name,
      artist: track.artist,
      url: track.preview_url + ".mp3",
      cover:
        "https://iheartcats.com/wp-content/uploads/2017/04/cat-square-feature.png",
      theme: "#cc0000",
      lrc: "[00:00.00] " + track.name
    }));
    this.setState({
      tracks: [...tracks]
    });
  };

  componentDidMount() {
    this.mappedTracks();
  }

  // event binding example
  onPlay = e => {
    this.setState(
      {
        current_song: e.srcElement.src
      },
      () => this.findMessage()
    );
  };

  findMessage = () => {
    let currentTracks = this.state.tracks;
    let clickedTrackSrc = this.state.current_song;
    let obj = currentTracks.find(o => o.url === clickedTrackSrc);
    this.setState({
      current_message: obj.name
    });
  };

  onPause = () => {
    console.log("on pause");
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      mini: false,
      autoplay: false,
      theme: "#FADFA3",
      loop: "all",
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 1,
      audio: this.state.tracks
    };

    if (this.state.tracks === undefined || this.state.tracks.length === 0)
      return (
        <div className="rainbow-p-vertical_xx-large">
          <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
          </div>
        </div>
      );
    return (
      <Grid>
        <Grid container>
          <Grid item xs={6}>
            <ReactAplayer
              {...props}
              onInit={this.onInit}
              onPlay={this.onPlay}
              onPause={this.onPause}
            />
          </Grid>
          <Grid item xs={2}>
            <div>{this.state.current_song}</div>
            <div>{this.state.current_message}</div>
          </Grid>
          <Grid item xs={4}>
            <ReactAplayer
              {...props}
              onInit={this.onInit}
              onPlay={this.onPlay}
              onPause={this.onPause}
            />
            <button onClick={() => this.ap.lrc.toggle()}>toggle</button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
