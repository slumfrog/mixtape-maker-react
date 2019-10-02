import React from "react";
import tape from "../tape4.png";
import tapegif from "../Tape4.gif";

const TapeMixtape = ({ selectedMixtape }) => {
  const tapePngStyles = {
    maxWidth: 500
  };

  const tapeGifStyles = {
    maxWidth: 448
  };

  return (
    <>
      <div className="tape">
        <img
          draggable="false"
          style={tapeGifStyles}
          src={tapegif}
          alt="random"
        />
        <img
          draggable="false"
          style={tapePngStyles}
          src={tape}
          className="over"
          alt="random"
        />
        <h2 className="topShowPage">{selectedMixtape[0].name}</h2>
      </div>
    </>
  );
};

export default TapeMixtape;
