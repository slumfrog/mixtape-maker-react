import React from "react";

const CreatePlaylist = ({ selectedPlaylist }) => {
  return (
    <div>
      {selectedPlaylist.map(track => (
        <>
          <div>{track.name}</div>
          <div>{track.preview}</div>
        </>
      ))}
    </div>
  );
};

export default CreatePlaylist;
