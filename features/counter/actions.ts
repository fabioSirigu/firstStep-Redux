import { DECREMENT, INCREMENT, INPUT_INCREMENT } from './constants';

// Action creators

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const incrementByValue = (payload: number) => ({
  type: INPUT_INCREMENT,
  payload,
});
