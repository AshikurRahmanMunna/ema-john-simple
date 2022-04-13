import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const from = location.state?.from?.pathname || '/';
  if(user) {
    navigate(from, {replace: true});
  }
  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  }
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  }
  return (
    <div className="custom-form-container">
      <div>
        <h2 className="custom-form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="custom-input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>
          <div className="custom-input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          {
            loading && <p>Loading...</p>
          }
          <p className="custom-form-error">{error?.message}</p>
          <input className="custom-form-submit" type="submit" value="Login" required />
          <p className="custom-form-text">
            New To Ema-John?{" "}
            <Link className="custom-form-link" to="/signup">
              Create an Account
            </Link>
          </p>
          <div className="custom-form-or">
            <div></div>
            <p>Or</p>
            <div></div>
          </div>
        </form>
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

export default Login;
