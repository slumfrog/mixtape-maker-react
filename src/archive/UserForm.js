import React, { useState } from "react";

const SignupForm = ({ submit, header }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spotify_id, setSpotifyId] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submit({ email, password, spotify_id });
        setEmail("");
        setPassword("");
        setSpotifyId("");
      }}
    >
      <span>{header}</span>
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        placeholder="SpotifyID"
        type="spotify_id"
        name="spotify_id"
        value={spotify_id}
        onChange={e => setSpotifyId(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default SignupForm;
