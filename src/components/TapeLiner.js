import React from "react";
import tape_liner from "../tape_liner.png";

const TapeLiner = ({ selectedMixtape }) => {
  const tapePngStyles = {
    maxWidth: 500
  };

  return (
    <>
      <div className="tape_liner">
        <img
          draggable="false"
          style={tapePngStyles}
          src={tape_liner}
          alt="random"
        />
        <h2 className="top">{selectedMixtape[0].personal_message}</h2>
      </div>
    </>
  );
};

export default TapeLiner;
