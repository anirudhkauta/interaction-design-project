import { combineReducers } from 'redux';

import users from './users';
import events from './events';
import classes from './classes';

export default combineReducers({
  users,
  events,
  classes,
});
