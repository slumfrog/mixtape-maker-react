import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./containers/Playlists";
import Gallery from "./components/Gallery";
import About from "./components/About";
import CreateMixtape from "./containers/CreateMixtape";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import API from "./adapters/API";

class App extends React.Component {
  state = {
    user: undefined,
    playlists: [],
    selected_id: [],
    selected_playlist: []
  };

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user });
      })
      .then(this.fetchPlaylists());
  }

  signUp = user => {
    API.signUp(user).then(user => this.setState({ user }));
  };

  logIn = user => {
    API.logIn(user).then(user => this.setState({ user }));
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
    this.setState({ playlists: [] });
    this.setState({ selected_playlist: [] });
  };

  handlePlaylistClick = props => {
    this.setState({ selected_id: props });
    this.fetchPlaylist(props);
  };

  fetchPlaylists = () => {
    fetch("http://localhost:3000/playlists/", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(playlists => this.setState({ playlists: playlists }));
  };

  fetchPlaylist = id => {
    fetch(`http://localhost:3000/playlist/${id}`, {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(selected_playlist =>
        this.setState({ selected_playlist: selected_playlist })
      );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            user={this.state.user}
            signUp={this.signUp}
            logIn={this.logIn}
            logOut={this.logOut}
          />
          <Switch>
            <Create
              path="/"
              exact
              component={Create}
              playlists={this.state.playlists}
              handlePlaylistClick={this.handlePlaylistClick}
            />
            <CreateMixtape
              path="/create/:id"
              component={CreateMixtape}
              selectedPlaylist={this.state.selected_playlist}
            />
            <Gallery path="/gallery" exact component={Gallery} />
            <About path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
