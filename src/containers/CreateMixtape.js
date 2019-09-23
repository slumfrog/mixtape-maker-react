import React, { Component } from "react";
import Tracks from "../components/Tracks";
import Tape from "../components/Tape";

class CreateMixtape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackComments: [],
      tapeText: "",
      tapeImage: ""
    };
  }

  // find the object within the array that matches the key
  // then replace the value within that object

  handlePopulateTrackComments = () => {
    let track_objs = this.props.selectedPlaylist.tracks.map(track => ({
      id: track.id,
      comment: ""
    }));
    this.setState({
      trackComments: track_objs
    });
  };

  handleTapeText = event => {
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
    debugger;
    // find the the Index of the existing comment
    let existingCommentIndex = this.state.trackComments.findIndex(
      trackComment => trackComment.id == id
    );

    //in the currentComments, replace 1 element, at the existingComment index with the new track comment
    let updatedComments = currentComments.splice(
      existingCommentIndex,
      1,
      trackComment
    );

    this.setState({
      trackComments: [...updatedComments]
    });
  };

  componentDidMount() {
    this.handlePopulateTrackComments();
  }

  render() {
    return (
      <>
        <Tape
          handleTapeText={this.handleTapeText}
          tapeImage={this.state.tapeImage}
          tapeText={this.state.tapeText}
        />
        <Tracks
          selectedPlaylist={this.props.selectedPlaylist.tracks}
          handleTrackComment={this.handleTrackComment}
          trackComment={this.trackComment}
          handlePopulateTrackComments={this.handlePopulateTrackComments}
        />
      </>
    );
  }
}

export default CreateMixtape;
