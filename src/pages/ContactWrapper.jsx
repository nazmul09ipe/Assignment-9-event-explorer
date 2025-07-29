// @flow strict

import * as React from 'react';
import Contact from './Contact';
import PrivateRoute from './../Provider/PrivateRoute';

function ContactWrapper() {
    return (
        <div>
            <PrivateRoute>
                     <Contact></Contact>
              </PrivateRoute>
        </div>
    );
};

export default ContactWrapper;