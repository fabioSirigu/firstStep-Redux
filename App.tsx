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
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={inputIncrement}>Increment by value</button>
      <p>{value}</p>
    </div>
  );
}
