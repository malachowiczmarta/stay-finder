import React from 'react';

type Props = {
  label: 'Adults' | 'Children';
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

type ButtonProps = {
  label: '+' | '-';
  handleClick: () => void;
};

const Button = React.memo(function Button({ handleClick, label }: ButtonProps) {
  return (
    <button
      className="text-gray-600 cursor-pointer hover:text-gray-700"
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
});

function Counter({ label, count, handleIncrement, handleDecrement }: Props) {
  return (
    <div className="flex items-center">
      <div className="pr-2">{label}:</div>
      <Button label="-" handleClick={() => handleDecrement()} />
      <div className="px-2">{count}</div>
      <Button label="+" handleClick={() => handleIncrement()} />
    </div>
  );
}

export default Counter;
