import React, { useState } from "react";
import tapeBlack from "../tape2.png";
import tapeRed from "../tape_red.png";
import tapeGreen from "../tape_green.png";

import { Input } from "react-rainbow-components";
import { RadioButtonGroup } from "react-rainbow-components";

const options = [
  { value: tapeBlack, label: "Black" },
  { value: tapeRed, label: "Red" },
  { value: tapeGreen, label: "Green" }
];

class Tape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: tapeBlack
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    return this.setState({ value: event.target.value });
  }

  render() {
    const containerStyles = {
      maxWidth: 250
    };

    const imageStyles = {
      maxWidth: 500
    };
    return (
      <>
        <div className="tape">
          <img style={imageStyles} src={this.state.value} alt="random" />
          <h2 className="top">{this.props.tapeText}</h2>
        </div>
        <RadioButtonGroup
          id="radio-button-group-component-1"
          options={options}
          value={this.state.value}
          variant="brand"
          onChange={this.handleOnChange}
          label="RadioButtonGroup Label"
        />
        <div>
          <Input
            maxLength="28"
            id="example-textarea-1"
            label="Enter name for this mixtape"
            name="tapeText"
            rows={1}
            placeholder="You have a max of 26 characters"
            style={containerStyles}
            className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            type="text"
            value={this.props.tapeText}
            onChange={this.props.handleTapeText}
          />
        </div>
      </>
    );
  }
}

export default Tape;
