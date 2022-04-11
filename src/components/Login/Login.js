import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
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
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
          </div>
          {
            loading && <p>Loading...</p>
          }
          <p className="form-error">{error?.message}</p>
          <input className="form-submit" type="submit" value="Login" required />
          <p className="form-text">
            New To Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create an Account
            </Link>
          </p>
          <div className="form-or">
            <div></div>
            <p>Or</p>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
