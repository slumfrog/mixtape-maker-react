import React from "react";

function Gallery({ mixtapes, selectMixtape }) {
  return (
    <div>
      {mixtapes.map(mixtape => (
        <>
          <div
            onClick={() => selectMixtape(mixtape)}
            className="card"
            key={mixtape.id}
          >
            <h3>{mixtape.name}</h3>
          </div>
        </>
      ))}
    </div>
  );
}

export default Gallery;
