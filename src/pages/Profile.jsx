// @flow strict
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useContext, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';

import { AuthContext } from './../Provider/AuthProvider';
import app from '../Firebase/Firebase.config';

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    if (!auth.currentUser) {
      alert("No user is currently logged in.");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error.code, error.message);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-300 py-10 px-5 sm:px-10 lg:px-24">
      <Helmet>
        <title>Profile | Happen Hub</title>
      </Helmet>

      {/* Profile Header */}
      <div className="max-w-3xl mx-auto text-center mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-950 mb-3">My Profile</h1>
        <img
          src={user?.photoURL || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-30 h-30 rounded-full mx-auto mb-4 border-2 border-blue-500"
        />
        <h2 className="text-lg font-semibold text-cyan-800">Name: {user?.displayName || "No Name"}</h2>
        <h3 className="text-sm sm:text-base text-cyan-800">Email: {user?.email}</h3>
      </div>

      {/* Update Form */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-5">
        <h2 className="text-xl font-bold text-amber-700 text-center">Update Your Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-cyan-700 font-medium mb-1">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-cyan-700 font-medium mb-1">Photo URL</label>
            <input
              id="photoURL"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Direct Photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-800 text-white py-2 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
