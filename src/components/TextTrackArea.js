import React from "react";
import { Button } from "react-rainbow-components";
import Grid from "@material-ui/core/Grid";

function TextTrackArea() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <div className="create_font create_tracks">
            Tell us why you chose these tracks
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TextTrackArea;
