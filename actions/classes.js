import { createActions } from 'redux-actions';

const actions = createActions({
  postReview: (classId, review) => {
    //TODO type verification
    return {
      classId,
      review
    };
  },
});

export default actions;
