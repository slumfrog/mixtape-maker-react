import React, { Component } from "react";
import Tracks from "../components/Tracks";
import Tape from "../components/Tape";
import PersonalMessage from "../components/PersonalMessage";

class CreateMixtape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalMixtape: [],
      tapeText: "",
      selectedPlaylist: [],
      personalMessage: ""
    };
  }

  // find the object within the array that matches the key
  // then replace the value within that object

  handleTapeText = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePersonalMessage = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTrackComment = (track, event) => {
    const { id, value } = event.target;
    const trackComment = {
      track_id: id,
      comment: value,
      artist: track.artist,
      duration: track.duration,
      name: track.name,
      preview: track.preview
    };
    // get current comments

    let currentComments = this.state.finalMixtape;

    // if the comment song id already exists, find it and declare it
    let existingComment = currentComments.find(
      trackComment => trackComment.track_id == id
    );
    // find the the Index of the existing comment
    let existingCommentIndex = this.state.finalMixtape.findIndex(
      trackComment => trackComment.track_id == id
    );
    //in the currentComments, replace 1 element, at the existingComment index with the new track comment
    currentComments.splice(existingCommentIndex, 1, trackComment);

    // const updatedComments = [currentComents.slice(0, existingCommentIndex),trackComment, currentComents.slice(existingCommentIndex + 1) ]
    this.setState({
      finalMixtape: currentComments
    });
  };

  componentDidMount() {
    this.fetchPlaylist(this.props.computedMatch.params.id);
  }

  fetchPlaylist = selectedPlaylist => {
    fetch(`http://localhost:3000/playlist/${selectedPlaylist}`, {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(selectedPlaylist => {
        this.setState({ selectedPlaylist: selectedPlaylist }, () =>
          this.setTrackComments()
        );
      });
  };

  setTrackComments = () => {
    let track_objs = this.state.selectedPlaylist.map(track => ({
      name: track.name,
      preview: track.preview,
      track_id: track.track_id,
      duration: track.duration,
      artist: track.artist,
      comment: ""
    }));
    this.setState({
      finalMixtape: track_objs
    });
  };

  saveMixtape = () => {
    this.postMixtape();
  };

  postMixtape = () => {
    fetch("http://localhost:3000/mixtapes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ["Authorization"]: localStorage.token
      },
      body: JSON.stringify({
        mixtape: {
          user_id: this.props.user.id, // get user id from token
          name: this.state.tapeText,
          personal_message: this.state.personalMessage,
          tracks: this.state.finalMixtape
        }
      })
    });
  };

  render() {
    return (
      <>
        <button onClick={this.saveMixtape}>Save</button>
        <PersonalMessage handlePersonalMessage={this.handlePersonalMessage} />
        <Tape
          handleTapeText={this.handleTapeText}
          tapeImage={this.state.tapeImage}
          tapeText={this.state.tapeText}
        />
        <Tracks
          selectedPlaylist={this.state.selectedPlaylist}
          handleTrackComment={this.handleTrackComment}
        />
      </>
    );
  }
}

export default CreateMixtape;
