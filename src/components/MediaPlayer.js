import React from "react";
import ReactAplayer from "react-aplayer";
import { Spinner } from "react-rainbow-components";

let imgUrl =
  "https://assets.justinmind.com/blog/wp-content/uploads/2018/05/top-10-worst-90s-website-designs-header.png";

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
      artist: track.name,
      url: track.preview_url
        ? track.preview_url + ".mp3"
        : `https://p.scdn.co/mp3-preview/d377a4625baab0a7f55656003e4b89b886b65ae2?cid=c77b35b1851b46ac8325ef73d8f60a56.mp3&myid=${track.track_id}`,
      cover: track.duration,
      theme: track.id,
      lrc: "[00:00.00] " + track.message
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
        current_song: e.srcElement.src,
        currentTrackID: e.target.src.split("myid=")[1]
      },
      () => this.findMessage()
    );
  };

  findMessage = () => {
    let currentTracks = this.state.tracks;
    let clickedTrackSrc = this.state.current_song;
    let obj = currentTracks.find(o => o.url === clickedTrackSrc);
    this.setState(
      {
        current_message: obj.lrc,
        current_track: obj
      },
      () => this.props.handleCurrentTrack(this.state.current_message, obj)
    );
  };

  onPause = () => {};

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      mini: false,
      preload: "auto",
      autoplay: true,
      theme: "#FADFA3",
      loop: "all",
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 200,
      lrcType: 3,
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
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    );
  }
}
