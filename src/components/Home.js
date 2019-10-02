import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-rainbow-components";
import { MDBContainer } from "mdbreact";

function Home({ user }) {
  return (
    <div className="bg">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <div className="text-pop-up-top">Welcome to MixtapeMaker</div>
          <Button
            shaded
            label="Save Mixtape"
            variant="success"
            className="rainbow-m-around_medium"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
