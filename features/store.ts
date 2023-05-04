import { createStore } from 'redux';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, value: state.value + 1 };
    case 'counter/decrement':
      return { ...state, value: state.value - 1 };
    case 'counter/inputIncrement':
      return { ...state, value: state.value + Number(action.payload.input) };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);
