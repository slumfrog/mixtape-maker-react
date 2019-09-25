import React from "react";
import { Link } from "react-router-dom";

const Playlists = ({ playlists, selectPlaylist }) => {
  const images = playlists.map(playlist => playlist.images);
  const image = images.map(image => image[0].url);
  // images.map(image => image[0].url || )
  return (
    <div>
      {playlists.map(playlist => (
        <>
          <div
            onClick={() => selectPlaylist(playlist)}
            className="card"
            key={playlist.id}
          >
            <h3>{playlist.name}</h3>
            <img width="200px" src={images[1][0].url}></img>
            {/* <img width="200px" src={images.map(image => image[0].url)}></img> */}
            {playlist.id}
          </div>
        </>
      ))}
    </div>
  );
};

export default Playlists;
