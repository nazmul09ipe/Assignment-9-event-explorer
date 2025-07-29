// @flow strict

import * as React from 'react';
import Profile from './Profile';
import PrivateRoute from './../Provider/PrivateRoute';


function ProfileWrapper() {
    return (
        <div>
            <PrivateRoute>
                     <Profile></Profile>
              </PrivateRoute>
        </div>
    );
};

export default ProfileWrapper;