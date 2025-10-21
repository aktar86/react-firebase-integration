// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";
import React, { use } from "react";
// import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext/AuthContext";


const Register = () => {

const {createUser} = use(AuthContext)

// console.log('in the register', createUser());


const handleRegisterForm = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  createUser(email, password)
  .then(result => {
    console.log(result.user);
    event.target.reset();
  })
  .catch(err => {
    console.log(err.message);
  })
}







  // const handleRegisterForm = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const photo = e.target.photo.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const terms = e.target.terms.checked;

  //   console.log("submit form", name, photo, email, password);
  //   //reset status
  //   setError("");
  //   setSuccess(false);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       setSuccess(true);
  //       e.target.reset();
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setError(error.message);
  //     });
  // };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full min-w-sm  max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterForm}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                />
                {/* PhotoURL */}
                <label className="label">Photo Link</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo Link"
                />
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
                <div>
                  <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p>Already have an account? Please <Link className="text-blue-500 underline" to='/login'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
