import { createActions } from 'redux-actions';

const actions = createActions({
  postReview: (classId, body) => {
    //TODO type verification
    let userId = 1; // <- will come from server on post
    let semester = 'Fall 2016'; // <- will come from server on post
    return {
      userId: 1,
      classId,
      body,
      semester,
    };
  },
});

export default actions;
