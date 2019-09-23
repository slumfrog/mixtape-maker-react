import React from "react";
import { Link } from "react-router-dom";

const Playlists = ({ playlists, handlePlaylistClick }) => {
  return (
    <div>
      {playlists.map(playlist => (
        <div key={playlist.id}>
          <h3 onClick={() => handlePlaylistClick(playlist.id)}>
            <Link to={`/create/${playlist.id}`}>{playlist.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
