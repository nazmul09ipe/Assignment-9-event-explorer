// @flow strict
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { FcGoogle } from "react-icons/fc";
import { use } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import app from '../../../Firebase/Firebase.config';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const { signIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((result) => {
        console.log( result.user);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle=()=>{
signInWithPopup(auth, provider)
 .then((result) => {
    
    
    const user = result.user;
    console.log(user)
    navigate("/");
   
  }).catch((error) => {
   console.log(error)
  });
  }


  return (
    <div className='w-full mx-auto min-h-screen '>
      <Helmet>
        <title>Login | Happen Hub</title>
      </Helmet>
<div className='flex justify-center items-center'> <h1 className='text-3xl font-medium text-cyan-950 mt-10'> Please Login your Account</h1></div>
     <div className='flex justify-center items-center mt-10'>
      <div className="card bg-blue-300 w-[400px] h-[390px] shadow-2xl  ">
        <form onSubmit={handleLogin} className="card-body ml-5">
          <fieldset className="fieldset primary-font">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="label">Password</label>
            <div className="relative w-[320px]">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input w-full pr-10"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>

            <Link to="/auth/forgetPassword" state={{ email }}>
              <button type="button" className='text-left cursor-pointer transition hover:text-red-600'>
                Forgot Password?
              </button>
            </Link>

            <button type="submit" className="btn btn-neutral w-[320px] mt-4 hover:bg-amber-700">
              Login
            </button>
          </fieldset>

          <div>
            <button onClick={handleLoginWithGoogle} className='btn btn-neutral w-[320px] flex justify-center items-center gap-2 hover:bg-amber-700'>
              <FcGoogle size={20} />
              <h1>Login with Google</h1>
            </button>
          </div>

          <div className='flex justify-around items-center gap-5 mt-10'>
            <h1 className='font-medium'>New to the Website?</h1>
            <Link to='/auth/register' className="link link-hover text-red-600 font-medium">Register</Link>
          </div>
        </form>
      </div>
      
      
      
      </div> 
    </div>
  );
}

export default Login;
