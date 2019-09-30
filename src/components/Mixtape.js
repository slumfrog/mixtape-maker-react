import React, { Component } from "react";
import { AccordionSection, Accordion, Card } from "react-rainbow-components";
import MediaPlayer from "../components/MediaPlayer";
import { Spinner } from "react-rainbow-components";
import Grid from "@material-ui/core/Grid";
import Draggable from "react-draggable";
import MixtapeComments from "../components/MixtapeComments";

let imgUrl =
  "https://assets.justinmind.com/blog/wp-content/uploads/2018/05/top-10-worst-90s-website-designs-header.png";

class Mixtape extends Component {
  constructor() {
    super();
    this.state = {
      selectedMixtape: null,
      currentMessage: "",
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  // For controlled component
  adjustXPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

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

  handleCurrentMessage = currentMessage => {
    this.setState({ currentMessage: currentMessage });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    if (!this.state.selectedMixtape)
      return (
        <div className="rainbow-p-vertical_xx-large">
          <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
          </div>
        </div>
      );
    return (
      <div className="bg">
        <Grid container xs={12}>
          <Grid item xs={3}>
            {this.state.currentMessage}
          </Grid>
          <Draggable {...dragHandlers}>
            <Grid item xs={3}>
              <MixtapeComments />
            </Grid>
          </Draggable>
          <Grid item xs={1}></Grid>
          <Draggable {...dragHandlers}>
            <Grid item xs={4}>
              <div>
                <MediaPlayer
                  handleCurrentMessage={this.handleCurrentMessage}
                  selectedMixtape={this.state.selectedMixtape}
                />
              </div>
            </Grid>
          </Draggable>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Mixtape;
