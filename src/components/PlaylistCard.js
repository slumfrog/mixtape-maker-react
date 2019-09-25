import React from "react";
import { Link } from "react-router-dom";

const Playists = ({ playlists, selectPlaylist }) => {
  const { playlist } = props;

  return (
    <div className="ui column">
      <div className="ui card" key={playlist.name}>
        <div className="image">
          <img alt="oh no!" src={playlist.name} />
        </div>
        <div className="content">
          <div className="header">
            {playlist.name} {playlist.name}
          </div>

          <div className="meta text-wrap">
            <small>{playlist.name}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {playlist.name}
          </span>

          <span>
            <i className="icon lightning" />
            {playlist.name}
          </span>
          <span>
            <i className="icon shield" />
            {playlist.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
