import React from "react";

const PlaylistCard = props => {
  const { playlists } = props;

  let botType;

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={playlists.id}
        onClick={() => props.isClicked(playlists)}
      >
        <div className="image">
          <img alt="oh no!" src={playlists.name} />
        </div>
        <div className="content">
          <div className="header">
            {playlists.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{playlists.name}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {playlists.name}
          </span>

          <span>
            <i className="icon lightning" />
            {playlists.name}
          </span>
          <span>
            <i className="icon shield" />
            {playlists.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
