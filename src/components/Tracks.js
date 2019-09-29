import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  Input,
  AccordionSection,
  Card
} from "react-rainbow-components";

const Tracks = props => {
  const containerStyles = {
    maxWidth: 700
  };
  return (
    <div>
      <div className="rainbow-m-around_xx-large">
        <Card>
          <Accordion id="accordion-1">
            {props.selectedPlaylist.map(track => (
              <>
                <AccordionSection label={track.name}>
                  <div key={track.track_id}>
                    <Grid container xs={12}>
                      <Grid xs={4}>
                        <div>I will put an image here</div>
                      </Grid>
                      <Grid xs={8}>
                        <Input
                          type="text"
                          id="outlined-multiline-flexible"
                          placeholder={"I chose " + track.name + " because..."}
                          style={containerStyles}
                          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                          value={props.trackComment}
                          onChange={event =>
                            props.handleTrackComment(track, event)
                          }
                        />
                      </Grid>
                    </Grid>
                  </div>
                </AccordionSection>
              </>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default Tracks;
