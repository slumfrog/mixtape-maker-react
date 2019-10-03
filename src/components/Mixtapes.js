import React, { Component } from "react";
import { Spinner } from "react-rainbow-components";
import tapeBlack from "../tape2.png";
import tapeRed from "../tape_red.png";
import tapeGreen from "../tape_green.png";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      mixtapes: []
    };
  }

  componentDidMount() {
    this.props.fetchMixtapes();
  }

  render() {
    if (this.props.mixtapes.length === 0 || this.props.mixtapes === undefined)
      return (
        <div className="rainbow-p-vertical_xx-large">
          <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
          </div>
        </div>
      );
    return (
      <div className="mixtapes">
        {this.props.mixtapes.map(mixtape => (
          <>
            <div
              onClick={() => this.props.selectMixtape(mixtape)}
              style={{ cursor: "pointer" }}
              className="mixtape-card mixtape-card-1"
              key={mixtape.id}
            >
              <div width="100%" class="mixtape mixtape-image">
                <img
                  draggable="false"
                  alt="mixtape"
                  width="100%"
                  src={mixtape.tape_colour}
                ></img>
                <h2 className="top">{mixtape.name}</h2>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Gallery;
