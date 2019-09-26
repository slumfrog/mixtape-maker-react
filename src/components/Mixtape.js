import React, { Component } from "react";
import { AccordionSection, Accordion, Card } from "react-rainbow-components";

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
        // ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(mixtape => this.setState({ selectedMixtape: mixtape }));
  };

  render() {
    if (!this.state.selectedMixtape) return <div>loading</div>;
    return (
      <div>
        <>{this.state.selectedMixtape[0].name}</>
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
