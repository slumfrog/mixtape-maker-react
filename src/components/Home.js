import React from "react";
import Grid from "@material-ui/core/Grid";

function Home({ user }) {
  return (
    <div className="bg">
      <Grid container direction="row" justify="center" alignItems="center">
        <div className="text-pop-up-top">Welcome to MixtapeMaker</div>
      </Grid>
    </div>
  );
}

export default Home;
