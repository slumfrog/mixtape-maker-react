import React, { Component } from "react";
import Tracks from "../components/Tracks";
import Tape from "../components/Tape";
import html2canvas from "html2canvas";

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
    let track_objs = this.props.selectedPlaylist.map(track => ({
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
    let currentComments = this.state.trackComment;

    // if the comment song id already exists, find it and declare it
    let existingComment = currentComments.find(
      trackComment => trackComment.name == id
    );

    // find the the Index of the existing comment
    let existingCommentIndex = this.state.trackComments.findIndex(
      trackComment => trackComment.name == id
    );

    //in the currentComments, replace 1 element, at the existingComment index with the new track comment
    let updatedComments = currentComments.splice(
      existingCommentIndex,
      1,
      trackComment
    );

    this.setState({
      trackText: [...updatedComments]
    });
  };

  // saveTape = event => {
  //   event.preventDefault();
  //   let tape = document.querySelector(".tape");

  //   html2canvas(tape, { useCORS: true }).then(canvas => {
  //     let imgData = canvas.toDataURL("image/png");
  //     console.log(imgData);
  //     this.postImage(imgData);
  //   });
  // };

  render() {
    console.log("render of createMixtape");
    return (
      <>
        <Tape
          handleTapeText={this.handleTapeText}
          tapeImage={this.state.tapeImage}
          tapeText={this.state.tapeText}
        />
        <Tracks
          selectedPlaylist={this.props.selectedPlaylist}
          handleTrackText={this.handleTrackText}
          trackText={this.state.trackMessages}
        />
      </>
    );
  }
}

export default CreateMixtape;
