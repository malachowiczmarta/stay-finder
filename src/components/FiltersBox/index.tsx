import { useState, useCallback } from 'react';
import Card from '../Card';
import Counter from './Counter/Counter';
import Stars from './Stars';

function FiltersBox() {
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);

  const handleDecrementAdults = useCallback(() => {
    setCountAdults((countAdults) => (countAdults > 0 ? countAdults - 1 : 0));
  }, [countAdults]);

  const handleIncrementAdults = useCallback(() => {
    setCountAdults((countAdults) => countAdults + 1);
  }, [countAdults]);

  const handleDecrementChildren = useCallback(() => {
    setCountChildren((countChildren) => (countChildren > 0 ? countChildren - 1 : 0));
  }, [countChildren]);

  const handleIncrementChildren = useCallback(() => {
    setCountChildren((countChildren) => countChildren + 1);
  }, [countChildren]);

  return (
    <Card>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-start gap-6 w-full">
        <Stars onChange={() => {}} />
        <Counter
          label="Adults"
          count={countAdults}
          handleIncrement={handleIncrementAdults}
          handleDecrement={handleDecrementAdults}
        />
        <Counter
          label="Children"
          count={countChildren}
          handleIncrement={handleIncrementChildren}
          handleDecrement={handleDecrementChildren}
        />
      </div>
    </Card>
  );
}

export default FiltersBox;
