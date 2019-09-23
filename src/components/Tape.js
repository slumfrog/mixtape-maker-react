import React from "react";

const Tape = props => {
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={props.tapeText}
            name="tapeText"
            placeholder="Name your mixtape"
            onChange={props.handleTapeText}
          />
        </form>
      </div>
      <div className="tape">
        <img
          src="https://i.pinimg.com/originals/4c/b9/f4/4cb9f4852bd0a30d722285e802660bf3.gif"
          alt="random"
        />
        <h2 className="top">{props.tapeText}</h2>
      </div>
    </>
  );
};

export default Tape;
