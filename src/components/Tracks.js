import React from "react";

const Tracks = props => {
  return (
    <div>
      {props.selectedPlaylist.map(track => (
        <>
          <div key={track.id}>
            {track.name}
            <form>
              <input
                type="text"
                value={props.trackComment}
                id={track.id}
                placeholder="Why I chose this song for you"
                onChange={event => props.handleTrackComment(event)}
              />
            </form>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tracks;
