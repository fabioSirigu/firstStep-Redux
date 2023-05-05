import * as React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './features/store';

export default function App() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();
  const value = useSelector((state: store) => state.value);

  const increment = () => {
    dispatch({ type: 'counter/increment' });
  };

  const decrement = () => {
    dispatch({ type: 'counter/decrement' });
  };

  const inputIncrement = () => {
    dispatch({ type: 'counter/inputIncrement', payload: { input } });
  };
  return (
    <div>
      <div>
        <input
          placeholder="Scrivi una quantità"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={inputIncrement}>Increment by value</button>
      <p>Value: {value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
