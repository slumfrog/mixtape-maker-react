import React from "react";
import tape from "../tape2.gif";

const TapeMixtape = ({ selectedMixtape }) => {
  const imageStyles = {
    maxWidth: 500
  };

  return (
    <>
      <div className="tape heartbeat">
        <img draggable="false" style={imageStyles} src={tape} alt="random" />
        <h2 className="top">{selectedMixtape[0].name}</h2>
      </div>
    </>
  );
};

export default TapeMixtape;
