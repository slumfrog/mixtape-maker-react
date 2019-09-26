import React from "react";
import ReactDOM from "react-dom";
import { PlayButton, Timer } from "react-soundplayer/components";

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from "react-soundplayer/addons";

// audio source
const streamUrl = "https://example.org/path/to/file.mp3";

// some track meta information
const trackTitle = "Great song by random artist";

const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...this.props} />
      <h2>{trackTitle}</h2>
      <Timer {...this.props} />
    </div>
  );
});

class App extends React.Component {
  render() {
    return (
      <AWSSoundPlayer
        streamUrl={streamUrl}
        trackTitle={trackTitle}
        preloadType="auto"
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default AWSSoundPlayer;
