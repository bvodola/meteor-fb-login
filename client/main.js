import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from '../imports/containers/AppContainer';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('root'));
});
