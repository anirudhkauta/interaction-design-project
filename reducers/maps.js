import update from 'immutability-helper';

const initialState = {
  buildings: {
    'Fisher South': {
      coordinates: [36.15, -95.947764],
    },
    'Lorton Village': {
      coordinates: [36.15142680000, -95.94829160000],
    },
  }
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}
