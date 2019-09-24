import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Playlists from "./containers/Playlists";
import Gallery from "./components/Gallery";
import About from "./components/About";
import CreateMixtape from "./containers/CreateMixtape";
import Home from "./components/Home";
import { Switch, Route, withRouter } from "react-router-dom";

import API from "./adapters/API";

class App extends React.Component {
  state = {
    user: undefined,
    playlists: [],
    selectedPlaylist: null
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
    this.setState({ selectedPlaylist: [] });
  };

  handlePlaylistClick = props => {
    this.setState({ selectedId: props });
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

  selectPlaylist = playlist =>
    this.setState({ selectedPlaylist: playlist }, () =>
      this.props.history.push(`/create/${playlist.id}`)
    );

  render() {
    return (
      <div className="App">
        <Navbar
          user={this.state.user}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
        />
        <Switch>
          <Home path="/" exact component={Home} />
          <Playlists
            path="/create"
            exact
            component={Playlists}
            playlists={this.state.playlists}
            selectPlaylist={this.selectPlaylist}
          />
          <CreateMixtape
            path="/create/:id"
            component={CreateMixtape}
            selectedPlaylist={this.state.selectedPlaylist}
            user={this.state.user}
          />
          <Gallery path="/gallery" exact component={Gallery} />
          <About path="/about" exact component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
