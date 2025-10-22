import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {

  
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  // sign in with email and password
  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // sign in with google 
  const handleGoogleSignInUser = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Log in now!</h1>
        </div>
        <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignInUser}>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p>
                New to here? Please{" "}
                <Link className="text-blue-500 underline" to="/register">
                  Register
                </Link>
              </p>

              <button
                onClick={handleGoogleSignInUser}
                className="btn w-full bg-white text-black"
              >
                sign in with google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/**
 * == in the PrivetRoute ==
 * useLocation
 * state={location?.pathname}  in the navigate link
 */

/**
 * ==In the login page==
 * going to login page and call again useLocation and set useNavigate
 * useLocation
 * useNavigate
 * state={location?.pathname}
 *
 *
 * navigate will declare in the signInUser Function
 * navigate(location.state)
 *
 */
