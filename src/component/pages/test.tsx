import { Path } from '../../routers/routes';
import { useAppDispatch } from '../../app/hooks';
import { push } from 'connected-react-router';

const Test = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div>あああああああああああああああああ</div>
      <div>
        <button
          onClick={() => {
            dispatch(push(Path.login));
          }}
        >
          戻れ
        </button>
      </div>
    </>
  );
};

export default Test;
