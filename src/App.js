import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import API from "./adapters/API";
const AUTH = "Authorization";

class App extends React.Component {
  state = {
    user: undefined,
    playlists: []
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
  };

  fetchPlaylists = () => {
    debugger;
    fetch("http://localhost:3000/playlists", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(playlists => this.setState({ playlists: playlists }));
  };

  // submitPost = post => {
  //   API.postPost(post)
  //     .then(data =>
  //       this.setState({
  //         user: {
  //           ...this.state.user,
  //           posts: [...this.state.user.posts, data.post]
  //         }
  //       })
  //     )
  //     .catch(errorPromise => {
  //       errorPromise.then(data => {
  //         this.setState({ errors: data.errors });
  //       });
  //     });
  // };

  render() {
    return (
      <div className="App">
        <Navbar
          playlists={this.state.playlists}
          user={this.state.user}
          signUp={this.signUp}
          logIn={this.logIn}
          logOut={this.logOut}
        />
      </div>
    );
  }
}

export default App;
