import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Two passwords didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password Must Be 6 Characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  }

  return (
    <div className="custom-form-container">
      <div>
        <h2 className="custom-form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="custom-input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="custom-input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="custom-input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <input className="custom-form-submit" type="submit" value="Sign Up" />
          <p className="custom-form-text">
            Already Have An Account?{" "}
            <Link className="custom-form-link" to="/login">
              Log In
            </Link>
          </p>
          <p className="custom-form-error">{error}</p>
        </form>
        <div className="custom-form-or">
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <div className="other-sign-in-container">
          <button onClick={handleGoogleSignIn} className="other-sign-in">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign In With
            Google
          </button>
          <button onClick={handleFacebookSignIn} className="other-sign-in">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Sign In With
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
