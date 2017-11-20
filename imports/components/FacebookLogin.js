import React from 'react';
import { Meteor } from 'meteor/meteor';

const FacebookLogin = () => (
  <button onClick={() => {
    Meteor.loginWithFacebook({
      loginStyle: 'popup',
      requestPermissions: ['email']
    }, function (e) {
      if (e) console.log('Error on loginWithFacebook', e);
    });
  }}>
    Login With Facebook
  </button>
);

export default FacebookLogin;
