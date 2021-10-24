type Props = {
  title: string;
  onClick?: () => void;
};

const TestButton = (props: Props) => {
  const { title, onClick } = props; //分割代入
  return (
    <>
      <div>
        <button onClick={onClick}>{title}</button>
      </div>
    </>
  );
};

export default TestButton;
