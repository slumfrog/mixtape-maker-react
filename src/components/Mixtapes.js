import React, { Component } from "react";
import { Spinner } from "react-rainbow-components";
import tapeImage from "../tape2.png";

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
      <div>
        {this.props.mixtapes.map(mixtape => (
          <>
            <div
              onClick={() => this.props.selectMixtape(mixtape)}
              style={{ cursor: "pointer" }}
              className="mixtape-card"
              key={mixtape.id}
            >
              <div width="100%" class="mixtape">
                <img
                  draggable="false"
                  alt="mixtape"
                  width="100%"
                  src={tapeImage}
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
