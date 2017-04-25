import { combineReducers } from 'redux';

import profile from './profile'
import users from './users';
import events from './events';
import classes from './classes';

export default combineReducers({
  profile,
  users,
  events,
  classes,
});
