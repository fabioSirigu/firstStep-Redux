import * as React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from './features/store';
import {
  DECREMENT,
  INCREMENT,
  INPUT_INCREMENT,
} from './features/counter/constants';
import {
  incrementByValue,
  increment,
  decrement,
} from './features/counter/actions';

export default function App() {
  const [input, setInput] = React.useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state: Store) => state.value);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const inputIncrement = () => {
    dispatch(incrementByValue(input));
  };

  return (
    <div>
      <div>
        <input
          placeholder="Scrivi una quantità"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.valueAsNumber)}
        />
      </div>
      <button onClick={inputIncrement}>Increment by value</button>
      <p>Value: {value}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
