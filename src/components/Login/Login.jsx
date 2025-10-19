import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";




const Login = () => {
const {signInUser} = use(AuthContext)





const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.email.value;
  
    signInUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(err => {
      console.log(err.message);
    })
}


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Log in now!</h1>
        </div>
        <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
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
              <p>New to here? Please <Link className="text-blue-500 underline" to='/register'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
