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

function Button({ handleClick, label }: ButtonProps) {
  return (
    <button
      className="text-gray-600 cursor-pointer hover:text-gray-700"
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
}

const Count = React.memo(function Count({ text }: { text: number }) {
  return <p className="px-2">{text}</p>;
});

const Counter = React.memo(function Counter({
  label,
  count,
  handleIncrement,
  handleDecrement
}: Props) {
  return (
    <div className="flex items-center">
      <div className="pr-2">{label}:</div>
      <Button label="-" handleClick={() => handleDecrement()} />
      <Count text={count} />
      <Button label="+" handleClick={() => handleIncrement()} />
    </div>
  );
});

export default Counter;
