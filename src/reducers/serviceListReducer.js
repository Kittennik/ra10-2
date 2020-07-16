import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const addItem = action.payload;

      if (addItem.id) {
        return state.map((service) => {
          if (service.id === addItem.id) {
            return {
              id: addItem.id,
              name: addItem.name,
              price: addItem.price,
            }
          }
          return service;
        });
      }
      return [...state, {id: nanoid(), name: addItem.name, price: Number(addItem.price)}];

    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);

    default:
      return state;
  }
}
