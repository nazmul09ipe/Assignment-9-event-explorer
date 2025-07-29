// @flow strict

import * as React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Footer from './Components/Footer/Footer.jsx';
import Loading from '../../Provider/Loading.jsx';

function HomeLayout() {
  const {state}=useNavigation()
  return (
    <div className="w-full min-h-screen flex flex-col">
      <ScrollRestoration />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
       {state=="loading"? <Loading></Loading>:<Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomeLayout;
