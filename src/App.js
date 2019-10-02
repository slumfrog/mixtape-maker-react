import React from "react";
import "./App.css";
import SignInController from "./components/SignInController";
import Playlists from "./containers/Playlists";
import Mixtapes from "./components/Mixtapes";
import Mixtape from "./components/Mixtape";
import CreateMixtape from "./containers/CreateMixtape";
import Home from "./components/Home";
import { Switch, withRouter } from "react-router-dom";
import API from "./adapters/API";

class App extends React.Component {
  state = {
    user: null,
    playlists: [],
    selectedPlaylist: null,
    mixtapes: [],
    selectedMixtape: null
  };

  componentDidMount() {
    this.validate();
  }

  validate = () => {
    API.validateUser().then(user => {
      this.setState({ user });
    });
  };

  signUp = user => {
    API.signUp(user).then(user => this.setState({ user }));
  };

  logIn = user => {
    API.logIn(user).then(user => {
      this.setState({ user });
      this.validate();
    });
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
    this.setState({ playlists: [] });
    this.setState({ selectedPlaylist: [] });
    this.setState({ selectMixtape: null });
    this.setState({ mixtapes: [] });
    this.setState({ profile: {} });
    this.props.history.push("/");
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

  fetchMixtapes = () => {
    fetch("http://localhost:3000/mixtapes/", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(mixtapes => this.setState({ mixtapes: mixtapes }));
  };

  selectPlaylist = playlist =>
    this.setState({ selectedPlaylist: playlist }, () =>
      this.props.history.push(`/create/${playlist.id}`)
    );

  selectMixtape = mixtape =>
    this.setState({ selectedMixtape: mixtape }, () =>
      this.props.history.push(`/mixtapes/${mixtape.id}`)
    );

  render() {
    return (
      <div className="App">
        <SignInController
          path="/"
          exact
          component={SignInController}
          user={this.state.user}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
          profile={this.state.profile}
        />
        {this.state.user && !this.state.user.error ? (
          <Switch>
            <Home
              path="/"
              exact
              profile={this.state.profile}
              user={this.state.user}
              component={Home}
            />
            <Playlists
              path="/create"
              exact
              component={Playlists}
              playlists={this.state.playlists}
              selectPlaylist={this.selectPlaylist}
            />
            <CreateMixtape
              path="/create/:id"
              coponent={CreateMixtape}
              selectedPlaylist={this.state.selectedPlaylist}
              user={this.state.user}
            />
            <Mixtapes
              path="/mixtapes"
              exact
              mixtapes={this.state.mixtapes}
              component={Mixtapes}
              selectMixtape={this.selectMixtape}
              fetchMixtapes={this.fetchMixtapes}
            />
            <Mixtape
              exact
              path="/mixtapes/:id"
              selectedMixtape={this.state.selectedMixtape}
              component={Mixtape}
            />
          </Switch>
        ) : (
          <Switch>
            <Mixtape
              exact
              path="/mixtapes/:id"
              selectedMixtape={this.state.selectedMixtape}
              component={Mixtape}
            />
          </Switch>
        )}
      </div>
    );
  }
}

export default withRouter(App);
