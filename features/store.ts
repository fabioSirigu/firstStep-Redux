import { createStore } from 'redux';
import { DECREMENT, INCREMENT, INPUT_INCREMENT } from './counter/constants';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case INPUT_INCREMENT:
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);

export type Store = {
  value: number;
};
