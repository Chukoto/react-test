import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { counterSlice } from './features/counter/counterSlice';
import TestButton from './parts/TestButton';
import { Router } from './routers/routes';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './app/store';

// useState
// useCallback
// useMemo
// useEffect
// useRef
// useSelector
// useDispatch

// ライフサイクル→
// 1. didMount ページが最初に表示された時に起こる処理
// 2. didUpdate ページの中で何かが更新された際に走る処理
// 3. willUnmount ページを離れる直前に走る処理

function App() {
  // const [state, setState] = useState<string>('aaa');

  // const onBlurId = useCallback(
  //   (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //     setId(e.target.value);
  //   },
  //   []
  // );

  return (
    <div>
      <ConnectedRouter history={history}>{Router}</ConnectedRouter>
    </div>
  );
}

export default App;
