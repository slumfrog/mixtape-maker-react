import React, { Component } from "react";
import html2canvas from "html2canvas";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackmessages: [],
      tapeText: "",
      tapeImage: ""
    };
    this.handleTapeText = this.handleTapeText.bind(this);
  }

  handleTapeText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  saveTape = event => {
    event.preventDefault();
    let tape = document.querySelector(".tape");

    html2canvas(tape, { useCORS: true }).then(canvas => {
      let imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      this.postImage(imgData);
    });
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              type="text"
              value={this.state.tapeText}
              name="tapeText"
              placeholder="Name your mixtape"
              onChange={this.handleTapeText}
            />
          </form>
        </div>
        <div className="tape">
          <img
            src="https://i.pinimg.com/originals/4c/b9/f4/4cb9f4852bd0a30d722285e802660bf3.gif"
            alt="random"
          />
          <h2 className="top">{this.state.tapeText}</h2>
        </div>
        {this.props.selectedPlaylist.map(track => (
          <>
            <div>{track.name}</div>
            <form>
              <input
                type="text"
                value={this.state.trackmessages}
                name="trackmessages"
                placeholder="Why I chose this song for you"
                onChange={this.handleChange}
              />
            </form>
          </>
        ))}
      </div>
    );
  }
}

export default CreatePlaylist;
