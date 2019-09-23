import React from "react";
import { Link } from "react-router-dom";

const Playlists = ({ playlists, selectPlaylist }) => {
  return (
    <div>
      {playlists.map(playlist => (
        <div key={playlist.id}>
          <h3 onClick={() => selectPlaylist(playlist)}>{playlist.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
