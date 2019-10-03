import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "react-rainbow-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home({ user }) {
  return (
    <div className="bg">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <div className="text-pop-up-top">Welcome to MixtapeMaker</div>
          <div className="home-buttons">
            <Link style={{ textDecoration: "none" }} to="/create">
              <Button
                shaded
                label="Create a Mixtape"
                variant="success"
                className="rainbow-m-around_medium"
              />
            </Link>
            <Link style={{ textDecoration: "none" }} to="/mixtapes">
              <Button
                shaded
                label="View your Mixtapes"
                variant="success"
                className="rainbow-m-around_medium"
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
