import React from 'react';
import { Meteor } from 'meteor/meteor';

const Logout = () => (
  <button onClick={() => {
    Meteor.logout();
  }}>
    Logout
  </button>
)

export default Logout;
