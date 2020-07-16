import { FILTER_SERVICE } from '../actions/actionTypes.js';

const initialState = {
  value: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE:
      const {value} = action.payload;
      return {value};

    default:
      return state;
  };
}