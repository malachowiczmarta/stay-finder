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
    countChildren,
    handleStarsChange,
    countStars,
    applyFilters,
    resetFilters
  } = useFilters();
  const [search] = useCustomSearchParams();

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <Card>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-6 w-full">
        <Stars onChange={handleStarsChange} stars={countStars} />
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
        <div className="flex items-center gap-2">
          <button
            onClick={applyFilters}
            className="bg-violet-600 hover:bg-violet-700 text-white py-1 px-2 rounded-lg"
          >
            apply
          </button>
          <button
            disabled={
              search.maxAdults === '0' && search.maxChildren === '0' && search.stars === '0'
            }
            onClick={resetFilters}
            className="bg-violet-800 hover:bg-violet-900 disabled:bg-violet-200 disabled:cursor-not-allowed text-white py-1 px-2 rounded-lg"
          >
            reset
          </button>
        </div>
      </div>
    </Card>
  );
}

export default FiltersBox;
