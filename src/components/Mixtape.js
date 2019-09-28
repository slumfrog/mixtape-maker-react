import React, { Component } from "react";
import { AccordionSection, Accordion, Card } from "react-rainbow-components";
import MediaPlayer from "../components/MediaPlayer";
import { Spinner } from "react-rainbow-components";
import Grid from "@material-ui/core/Grid";

let imgUrl =
  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/470470/5107c1158cfe9f8552383ff5490c793ae14c34c9.jpg";

class Mixtape extends Component {
  constructor() {
    super();
    this.state = {
      selectedMixtape: null
    };
  }

  componentDidMount() {
    this.fetchMixtapes(this.props.location.pathname);
  }

  fetchMixtapes = id => {
    fetch(`http://localhost:3000${id}`, {
      headers: {
        // ["Authorization"]: localStorage.token - TOOK THIS OUT SO THAT IT'S PUBLIC
      }
    })
      .then(resp => resp.json())
      .then(mixtape => {
        this.setState({ selectedMixtape: mixtape });
      });
  };

  render() {
    if (!this.state.selectedMixtape)
      return (
        <div className="rainbow-p-vertical_xx-large">
          <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
          </div>
        </div>
      );
    return (
      <div
        className="Component-Bg"
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
        item
        xs={3}
      >
        <Grid container>
          <Grid item xs={6}>
            put the tape here
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid>
            <div>
              <MediaPlayer selectedMixtape={this.state.selectedMixtape} />
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Mixtape;
