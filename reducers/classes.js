import update from 'immutability-helper';

import eventActions from '../actions/events';

const dummyClassData = {
  1: {
    id: 1,
    name: 'interaction',
    semester: 'Fall 2016',
    tutorIds: [1,2],
  },
  2: {
    id: 2,
    name: 'test2',
    semester: 'Fall 2016',
    tutorIds: [],
    reviews: [],
  },
  3: {
    id: 2,
    name: 'test2',
    semester: 'Spring 2017',
    tutorIds: [],
    reviews: [],
  }
}

const dummyReviewData = {
  1: [//reviews id same as class id
    // 1: {
    //   userId: 1,
    //   body: 'tardigrades',
    // },
    // 2: {
    //   userId: 2,
    //   body: 'another review',
    // },
    {
      userId: 1,
      body: 'tardigrades',
      semester: 'Spring 2016',
    },
    {
      userId: 2,
      body: 'another review',
      semester: 'Spring 2016',
    },
  ],
  2: [],
  3: [],
}

const initialState = {
  classes: {...dummyClassData},
  reviews: {...dummyReviewData},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'postReview':
      // alert(JSON.stringify(update(state, {classes: {
      //   [action.payload.classId]: {
      //     reviews: {$push: [action.payload.review]}
      //   }
      // }})));
      return update(state, {reviews: {
        [action.payload.classId]:
          {$push: [{
            userId: action.payload.userId,
            body: action.payload.body,
            semester: action.payload.semester
          }]}
      }});


    default:
      return state;
  }
}
