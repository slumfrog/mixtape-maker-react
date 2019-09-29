import React, { useState } from "react";
import { Spinner } from "react-rainbow-components";
import tapeImage from "../tape2.png";

function Gallery({ mixtapes, selectMixtape }) {
  if (mixtapes.length === 0 || mixtapes === undefined)
    return (
      <div className="rainbow-p-vertical_xx-large">
        <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
          <Spinner size="large" />
        </div>
      </div>
    );
  return (
    <div>
      {mixtapes.map(mixtape => (
        <>
          <div
            onClick={() => selectMixtape(mixtape)}
            style={{ cursor: "pointer" }}
            className="mixtape-card"
            key={mixtape.id}
          >
            <div width="100%" class="mixtape">
              <img width="100%" src={tapeImage}></img>
              <h2 className="top">{mixtape.name}</h2>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Gallery;
