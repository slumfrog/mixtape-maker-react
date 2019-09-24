import React, { Component } from "react";
import Tracks from "../components/Tracks";
import Tape from "../components/Tape";
import PersonalMessage from "../components/PersonalMessage";

class CreateMixtape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackComments: [],
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

  handleTrackComment = event => {
    const { id, value } = event.target;
    const trackComment = { id: id, comment: value };
    // get current comments
    let currentComments = this.state.trackComments;

    // if the comment song id already exists, find it and declare it
    let existingComment = currentComments.find(
      trackComment => trackComment.id == id
    );
    // find the the Index of the existing comment
    let existingCommentIndex = this.state.trackComments.findIndex(
      trackComment => trackComment.id == id
    );

    //in the currentComments, replace 1 element, at the existingComment index with the new track comment
    currentComments.splice(existingCommentIndex, 1, trackComment);

    // const updatedComments = [currentComents.slice(0, existingCommentIndex),trackComment, currentComents.slice(existingCommentIndex + 1) ]
    this.setState({
      trackComments: currentComments
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
      id: track.id,
      comment: ""
    }));
    this.setState({
      trackComments: track_objs
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
        name: this.state.tapeText,
        personal_message: this.state.personalMessage
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
