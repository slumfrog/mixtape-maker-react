import React from "react";
import UserForm from "./UserForm";

const Navbar = ({ user, signUp, logIn, logOut, playlists }) => {
  return (
    <nav>
      {user ? (
        <div>
          <div>You are signed in as: {user.spotify_id}</div>
          <button onClick={logOut}>Log out</button>
          <div>
            {playlists.map(playlist => (
              <div>{playlist}</div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <UserForm submit={signUp} header={"Sign up"} />
          or
          <UserForm submit={logIn} header={"Log in"} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
