import React from "react";

const Tracks = props => {
  return (
    <div>
      {props.selectedPlaylist.map(track => (
        <>
          <div key={track.track_id}>
            {track.name}
            <form>
              <input
                type="text"
                value={props.trackComment}
                id={track.track_id}
                placeholder="Why I chose this song for you"
                onChange={event => props.handleTrackComment(track, event)}
              />
            </form>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tracks;
