import React from 'react';
import { Meteor } from 'meteor/meteor';
import FacebookLogin from './FacebookLogin';
import Logout from './Logout';

console.log(Meteor.userId());
const App = ({currentUser}) => (
  <div>
    App
    <br/>
    {currentUser ?
      <Logout />
      :
      <FacebookLogin />
    }


  </div>
);

export default App;
