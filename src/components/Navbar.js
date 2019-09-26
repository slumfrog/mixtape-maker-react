import React from "react";
import UserForm from "./UserForm";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import { Sidebar } from "react-rainbow-components";

const Navbar = ({ user, signUp, logIn, logOut }) => {
  return (
    <nav>
      {user && !user.error ? (
        <div>
          <div>You are signed in as: {user.spotify_id}</div>
          <Button label="Logout" variant="brand" onClick={logOut} />
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/create">
              <li>Create</li>
            </Link>
            <Link to="/mixtapes">
              <li>Mixtapes</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
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
