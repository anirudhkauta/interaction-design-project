import update from 'immutability-helper';

import eventActions from '../actions/events';

const dummyClassData = {
  1: {
    id: 1,
    name: 'interaction',
    semester: 'Fall 2016',
    tutorIds: [1,2],
    reviews: [{
      userId: 1,
      body: 'tardigrades',
    }],
  },
  2: {
    id: 2,
    name: 'test2',
    semester: 'Fall 2016',
    tutorIds: [],
    reviews: [],
  }
}

const initialState = {
  classes: {...dummyClassData},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'postReview':
      // alert(JSON.stringify(update(state, {classes: {
      //   [action.payload.classId]: {
      //     reviews: {$push: [action.payload.review]}
      //   }
      // }})));

      return update(state, {classes: {
        [action.payload.classId]: {
          reviews: {$push: [action.payload.review]}
        }
      }});


    default:
      return state;
  }
}
