// import React from "react";

// const Playlists = ({ playlists, selectPlaylist }) => {
//   if (!playlists.length) return <div>loading</div>;
//   return (
//     <div>
//       {playlists.map(playlist => (
//         <>
//           <div
//             onClick={() => selectPlaylist(playlist)}
//             className="card"
//             key={playlist.id}
//           >
//             <h3>{playlist.name}</h3>
//             <img
//               width="200px"
//               src={
//                 playlist.images[0].url ||
//                 "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png"
//               }
//             ></img>
//             {playlist.id}
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Playlists;

import React, { Component } from "react";

class Playlists extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    fetch("http://localhost:3000/playlists/", {
      headers: {
        ["Authorization"]: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(playlists => this.setState({ playlists: playlists }));
  };

  render() {
    if (this.state.playlists === undefined || this.state.playlists.length === 0)
      return <div>loading</div>;
    return (
      <div>
        {this.state.playlists.map(playlist => (
          <>
            <div
              onClick={() => this.props.selectPlaylist(playlist)}
              className="card"
              key={playlist.id}
            >
              <h3>{playlist.name}</h3>
              <img
                width="200px"
                src={
                  playlist.images.length === 0
                    ? "https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png"
                    : playlist.images[0].url
                }
              ></img>
              {playlist.id}
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Playlists;
