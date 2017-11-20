import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import App from '../components/App';

const AppContainer = withTracker(() => {
  const currentUser = Meteor.userId() || null;

  return {
    currentUser: currentUser
  };
})(App);

export default AppContainer;
