import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import NewNav from "./components/NewNav";
import Sidebar from "./components/Sidebar";
import Playlists from "./containers/Playlists";
import Mixtapes from "./components/Mixtapes";
import About from "./components/About";
import Mixtape from "./components/Mixtape";
import CreateMixtape from "./containers/CreateMixtape";
import Home from "./components/Home";
import SimpleSidebar from "./components/Sidebar";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import API from "./adapters/API";
import SignIn from "./components/SignIn";
import AWSSoundPlayer from "./components/MediaPlayer";

const sidebarContainerStyles = {
  width: "88px",
  borderBottomLeftRadius: "0.875rem"
};

class App extends React.Component {
  state = {
    user: null,
    playlists: [],
    selectedPlaylist: null,
    mixtapes: [],
    selectedMixtape: null
  };

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user });
      })
      .then(this.fetchPlaylists())
      .then(this.fetchMixtapes());
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
    this.setState({ selectMixtape: null });
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
        <Navbar
          user={this.state.user}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
        />
        <NewNav />
        {/* <SignIn
          user={this.state.user}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
        /> */}
        {/* <div
          className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_medium"
          style={sidebarContainerStyles}
        >
          <SimpleSidebar />
        </div> */}

        {this.state.user && !this.state.user.error ? (
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
            />
            <Mixtape
              exact
              path="/mixtapes/:id"
              selectedMixtape={this.state.selectedMixtape}
              component={Mixtape}
            />
            <About path="/about" exact component={About} />
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
