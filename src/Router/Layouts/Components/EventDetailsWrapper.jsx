// @flow strict

import React from 'react';
import PrivateRoute from '../../../Provider/PrivateRoute';
import EventDetails from './EventDetails';

const EventDetailsWrapper = () => {
  return (
    <PrivateRoute>
      <EventDetails />
    </PrivateRoute>
  );
};

export default EventDetailsWrapper