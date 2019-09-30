import React from "react";

function Home({ user }) {
  return (
    <div>
      <div className="text-pop-up-top">Welcome to MixtapeMaker</div>
      <img src={user.profile_pic} />
    </div>
  );
}

export default Home;
