import update from 'immutability-helper';

import eventActions from '../actions/events'

const initialState = {
  events: [],
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'createNewEvent':
      return update(state, {
        events: {$push: [action.payload]}
      });

    default:
      return state;
  }
}
