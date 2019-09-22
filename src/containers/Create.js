import React from "react";
import { Link } from "react-router-dom";

const Create = ({ playlists, handlePlaylistClick }) => {
  return (
    <div>
      {playlists.map(playlist => (
        <div>
          <h3
            onClick={() => handlePlaylistClick(playlist.id)}
            key={playlist.id}
          >
            <Link to={`/create/${playlist.id}`}>{playlist.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Create;
