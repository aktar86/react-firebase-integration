import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Please type your password correctly. Make sure that you type a small, capital and one speacial character"
      );
      return;
    }

    if (!terms) {
      alert("please accept our terms and condition");
      return;
    }

    // const passwordLenPattern = /^.{6,}$/;
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    // const specialPatternt = /[!@#$%&^*(),.?:"{}|<>]/;

    // if (!passwordLenPattern.test(password)) {
    //   console.log("pass didn't match");
    //   setError("password should be 6 chc or more");
    //   return;
    // } else if (!casePattern.test(password)) {
    //   setError(
    //     "Password must have at least one uppercase and one lowercase letter"
    //   );
    //   return;
    // } else if (!specialPatternt.test(password)) {
    //   setError("Password must contain at least one special character");
    //   return;
    // }

    console.log("submit form", name, photo, email, password);
    //reset status
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        e.target.reset();

        //update profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile);

        //send verification link
        sendEmailVerification(result.user)
          .then(() => {
            alert("Please verify your email");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
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
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleShowPassword}
                    className="btn btn-xs absolute top-2 right-5"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Checkbox */}
                <div>
                  <label class="label">
                    <input type="checkbox" name="terms" class="checkbox" />
                    accept our terms and conditions
                  </label>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {error && <p className="text-red-500">{error}</p>}
              {success && (
                <p className="text-green-500">Successfully Account Created</p>
              )}
              <p>
                {" "}
                Already have a account? Please{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
