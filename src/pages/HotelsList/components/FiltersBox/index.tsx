import { useEffect } from 'react';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';
import Card from '../../../../components/Card';
import Counter from './Counter/Counter';
import Stars from './Stars';
import useFilters from './useFilters';

function FiltersBox() {
  const {
    handleDecrementAdults,
    handleIncrementAdults,
    handleDecrementChildren,
    handleIncrementChildren,
    countAdults,
    countChildren
  } = useFilters();
  const [search, setSearch] = useCustomSearchParams();

  useEffect(() => {
    setSearch({ maxAdults: countAdults.toString(), maxChildren: countChildren.toString() });
  }, [countAdults, countChildren]);

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
