import React, { Component } from "react";
import { AccordionSection, Accordion, Card } from "react-rainbow-components";
import MediaPlayer from "../components/MediaPlayer";
import { Spinner } from "react-rainbow-components";

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
      <div>
        <>{this.state.selectedMixtape[0].name}</>
        <>
          <div>
            <MediaPlayer selectedMixtape={this.state.selectedMixtape} />
          </div>
        </>
        <div className="rainbow-m-around_xx-large">
          <Card>
            <Accordion>
              <AccordionSection label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by
                reflection, refraction and dispersion of light in water droplets
                resulting in a spectrum of light appearing in the sky.
              </AccordionSection>
            </Accordion>
          </Card>
        </div>
      </div>
    );
  }
}

export default Mixtape;
