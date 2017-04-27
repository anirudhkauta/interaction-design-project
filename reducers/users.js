import update from 'immutability-helper';

import eventActions from '../actions/events'

const initialState = {
  users: {
    1: {
      id: 1,
      type: 'student',
      name: 'Glorious Leader',
      email: 'zack@attack.go',
    },
    2: {
      id: 2,
      type: 'prof',
      name: 'S. Kuttal',
      email: 'kuttal@utulsa.edu',
    },
  },

  student: {
    1: {
      classIds: [1,2],
    },
  },

  prof: {
    2: {
      id: 2,
      classIds: [1,2],
      officeHours: [
        {MWF: "2:00-3:00pm"},
        {Th: "12:00-1:00pm"},
      ],
    },
  },

  tutors: {
    id: 1,
    classId: 1,
  },

};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {


    default:
      return state;
  }
}
