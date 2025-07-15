import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-container'>
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>
             <div className='input-container'>
                <input type="password" placeholder='password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forget">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forget Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
      
    </div>
  )
}

export default LoginForm
