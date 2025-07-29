// @flow strict

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { use } from 'react';
import { AuthContext } from './../../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';


function Register() {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercasePattern.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowercasePattern.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
  .then((result) => {
    const user = result.user;

    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    }).then(() => {
     
      setUser({ ...user, displayName: name, photoURL: photo });
      navigate("/");
    });
  })
  .catch((error) => {
    console.error("Error during registration:", error);
    alert(error.message);
  });

  };

  return (
    <div className='w-full mx-auto min-h-screen flex justify-center pt-5'>
      <Helmet>
        <title>Register | Happen Hub</title>
      </Helmet>

      <div className="card bg-blue-300 w-[420px] h-[535px] shadow-2xl">
        <form onSubmit={handleRegister} className="card-body ml-5">
          <fieldset className="fieldset primary-font">
            {/* Name */}
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" required />

            {/* Email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input name="photo" type="link" className="input" placeholder="Photo URL (direct image link)" />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative w-[320px]">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input w-full pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </span>
            </div>

            {/* Password rules */}
            <p className="text-sm text-gray-600 mt-1 ml-1">
              <span className="block">• At least 6 characters</span>
              <span className="block">• At least one uppercase letter</span>
              <span className="block">• At least one lowercase letter</span>
            </p>
            <div className='flex justify-start items-center gap-3'>
              <input type="checkbox"size={100} name="" id="" required/>
            <h1 className='text-[14px]'>Accept Our <Link to={"/terms"}>Terms and Condition</Link></h1>
            </div>

            <button
              type="submit"
              className="btn btn-neutral w-[320px] mt-4 hover:bg-amber-700"
            >
              Register
            </button>
          </fieldset>

          

          <div className="flex justify-around items-center gap-5 mt-4">
            <h1 className="font-medium">Already Have an Account?</h1>
            <Link to={'/auth/login'} className="link link-hover text-red-600 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
