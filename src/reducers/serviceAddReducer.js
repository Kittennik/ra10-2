import { CHANGE_SERVICE_FIELD, ADD_SERVICE, CHANGE_SERVICE, CHANGE_SERVICE_CANCEL } from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {fieldName, value} = action.payload;
      return {...state, [fieldName]: value};

    case CHANGE_SERVICE:
      const {id, name, price} = action.payload;
      return {id, name, price};

    case ADD_SERVICE:
      return {...initialState};

    case CHANGE_SERVICE_CANCEL:
      return {...initialState};

    default:
      return state;
  }
}
