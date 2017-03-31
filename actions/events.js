import { createActions } from 'redux-actions';

const actions = createActions({
  createNewEvent: (event) => {
    //TODO type verification
    return event;
  },
  createNewGroup: (group) => {
    //TODO type verification
    return group;
  },
  // createNewEvent: (event) => (store, dispatch) => {
  //   //Send to server and await reply before adding
  //   //TODO
  // }
});

export default actions;
