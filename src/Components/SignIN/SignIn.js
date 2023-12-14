import React, { useState } from 'react'
//imported icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './signin.css'

export default function SignIn() {

    const [active,setActive] = useState('container')

    const changeSingUp = () => {
        setActive('container right-panel-active')
    }
    const changeSingIn = () => {
        setActive('container')
    }


  return (
    <div className='containerSignIn'>
      <div className={active}>
      <div className="form-container sign-up-container">
        <form action="">
            <h1>Create Account</h1>

            <div className="social-container">
                <a href="" className="social"><FaFacebookSquare/></a>
                <a href="" className="social"><FaGoogle/></a>
                <a href="" className="social"><FaLinkedin/></a>
            </div>

            <span>Or use your email for registration</span>
            <input type="text" name="" id="" placeholder='Name' />
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>

            <button type='button'>Sign up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="">
            <h1>Sign in</h1>
            <div className="social-container">
                <a href="" className="social"><FaFacebookSquare/></a>
                <a href="" className="social"><FaGoogle/></a>
                <a href="" className="social"><FaLinkedin/></a>
            </div>

            <span>Or use your account</span>
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <a href="#">Forgot your password?</a>

            <button type='button'>Sign in</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
            <div className="overlay-panel overlay-left">
                <h1>Welcome Back</h1>
                <p>To Keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={changeSingIn}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
                <h1>Hello, Friend</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={changeSingUp}>Sign Up</button>
            </div>

        </div>
      </div>
      </div>
    </div>
  )
}
