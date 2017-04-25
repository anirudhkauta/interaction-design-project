import update from 'immutability-helper';

import eventActions from '../actions/events'

const initialState = {
  login: {
    // type: null,
    // user: null,
    // pass: null,
    type: 'student',
    user: 'brs092',
    pass: 'abcde',
  },
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {


    default:
      return state;
  }
}
