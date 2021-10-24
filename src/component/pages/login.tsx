import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from '../../features/counter/Counter';
import { counterSlice } from '../../features/counter/counterSlice';
import TestButton from '../../parts/TestButton';
import { useAppDispatch } from '../../app/hooks';
import { push } from 'connected-react-router';
import { Path } from '../../routers/routes';

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

const originId = 'admin';
const originPass = '123456';

type Test = {
  txt: string;
  num: number;
};

const test: Test = { txt: 'aaa', num: 0 };
const { txt, num } = test;
console.log(txt, num);

function Login() {
  // const [state, setState] = useState<string>('aaa');

  const dispatch = useAppDispatch();
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const [text, setText] = useState('');

  const handleLogin = useCallback(() => {
    // console.log(id === originId && pass === originPass);
    if (id === originId && pass === originPass) {
      setText('ログイン成功！');
    } else {
      setText('ちがいまーす');
    }
  }, [id, pass]);

  useEffect(() => {
    console.log('didMount');
    return console.log('willUnMount');
  }, []);

  useEffect(() => {
    console.log('didUpdate');
  }, [id, pass]);

  // const onBlurId = useCallback(
  //   (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //     setId(e.target.value);
  //   },
  //   []
  // );

  return (
    <>
      <div>
        <h1>ログイン</h1>
      </div>
      <div>
        <input type="text" onBlur={(e) => setId(e.target.value)} />
      </div>
      <div>
        <input type="password" onBlur={(e) => setPass(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>ログイン</button>
      </div>
      <div>{text}</div>
      <TestButton title={'うんこ'} onClick={() => dispatch(push(Path.test))} />
      <div>
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log('Enterおしたよー');
            }
          }}
        />
      </div>
    </>
  );
}

export default Login;
