import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewNav from "../components/NewNav";
import NavBar from "../components/NavBar";

const SignInController = ({ user, signUp, logIn, logOut }) => {
  const [member, setMember] = useState(true);

  return (
    <div>
      {user && !user.error ? (
        <div>
          <NavBar user={user} logOut={logOut} />
        </div>
      ) : window.location.pathname.includes("/mixtapes/") ? null : member ===
        true ? (
        <>
          <SignIn user={user} submit={logIn} header={"Log in"} />
          <Link onClick={() => setMember(false)}>
            Don't have an account? Sign Up
          </Link>
        </>
      ) : (
        <>
          <SignUp user={user} submit={signUp} header={"Sign up"} />
          <Link onClick={() => setMember(true)}>
            Already have an account? Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default SignInController;

// old code

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "react-rainbow-components";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import NewNav from "../components/NewNav";

// const SignInController = ({ user, signUp, logIn, logOut }) => {
//   const [member, setMember] = useState(true);

//   return (
//     <div>
//       {user && !user.error ? (
//         <div>
//           <div>You are signed in as: {user.spotify_id}</div>
//           <NewNav user={user} logOut={logOut} />
//         </div>
//       ) : member === true ? (
//         <>
//           <SignIn submit={logIn} header={"Log in"} />
//           <Link onClick={() => setMember(false)}>
//             Don't have an account? Sign Up
//           </Link>
//         </>
//       ) : (
//         <>
//           <SignUp submit={signUp} header={"Sign up"} />
//           <Link onClick={() => setMember(true)}>
//             Already have an account? Sign In
//           </Link>
//         </>
//       )}
//     </div>
//   );
// };

// export default SignInController;
