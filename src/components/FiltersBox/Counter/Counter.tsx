import React from 'react';

type Props = {
  label: 'Adults' | 'Children';
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

type ButtonProps = {
  name: '+' | '-';
  handleClick: () => void;
};

const Button = React.memo(({ handleClick, name }: ButtonProps) => {
  console.log(`${name} rendered button `);
  return (
    <button className="text-gray-600 cursor-pointer hover:text-gray-700" onClick={handleClick}>
      {name}
    </button>
  );
});

function Counter({ label, count, handleIncrement, handleDecrement }: Props) {
  console.log('render Counter', label);
  return (
    <div className="flex items-center">
      <div className="pr-2">{label}:</div>
      <Button name="-" handleClick={() => handleDecrement()} />
      <div className="px-2">{count}</div>
      <Button name="+" handleClick={() => handleIncrement()} />
    </div>
  );
}

export default Counter;
