import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

// useState
// useCallback
// useMemo
// useEffect
// useRef

function App() {
  const [state, setState] = useState<string>('aaa');

  const handleClick = useCallback(() => {
    if (state === 'aaa') {
      setState('bbb');
    } else {
      setState('aaa');
    }
  }, [state]);

  return (
    <>
      <div>{state}</div>
      <div>
        <button onClick={handleClick}>TEST</button>
      </div>
      <div>2</div>
      <div>3</div>
    </>
  );
}

export default App;
