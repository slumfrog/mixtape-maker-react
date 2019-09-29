import React from "react";
import tape from "../tape2.gif";
import { Input } from "react-rainbow-components";
const Tape = props => {
  const containerStyles = {
    maxWidth: 250
  };

  const imageStyles = {
    maxWidth: 500
  };
  return (
    <>
      <div className="tape">
        <img style={imageStyles} src={tape} alt="random" />
        <h2 className="top">{props.tapeText}</h2>
      </div>
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
          value={props.tapeText}
          onChange={props.handleTapeText}
        />
      </div>
    </>
  );
};

export default Tape;
