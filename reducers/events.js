import update from 'immutability-helper';

import eventActions from '../actions/events'

const initialState = {
  events: [],
  groups: [],
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'createNewEvent':
      return update(state, {
        events: {$push: [action.payload]}
      });
    case 'createNewGroup':
      return update(state, {
        groups: {$push: [action.payload]}
      });

    default:
      return state;
  }
}
