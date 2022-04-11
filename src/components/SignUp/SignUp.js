import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    
    if(user) {
      navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setError("Your Two passwords didn't match")
            return;
        }
        if(password.length < 6) {
          setError('Password Must Be 6 Characters or longer');
          return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
          <p className="form-text">
            Already Have An Account?{" "}
            <Link className="form-link" to="/login">
              Log In
            </Link>
          </p>
          <p className='form-error'>{error}</p>
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

export default SignUp;