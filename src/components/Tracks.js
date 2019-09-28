import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const Tracks = props => {
  return (
    <div>
      {props.selectedPlaylist.map(track => (
        <>
          <div key={track.track_id}>
            {track.name}
            <form>
              <TextField
                id="outlined-multiline-flexible"
                type="text"
                label="Multiline"
                multiline
                rowsMax="4"
                value={props.trackComment}
                onChange={event => props.handleTrackComment(track, event)}
                margin="normal"
                variant="outlined"
              />
              {/* <input
                type="text"
                value={props.trackComment}
                id={track.track_id}
                placeholder="Why I chose this song for you"
                onChange={event => props.handleTrackComment(track, event)}
              /> */}
            </form>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tracks;
