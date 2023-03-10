import { useCallback, useState } from 'react';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';

function useFilter() {
  const [adults, setAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countStars, setCountStars] = useState(0);
  const [, setSearch] = useCustomSearchParams();

  const handleDecrementAdults = useCallback(() => {
    setAdults((countAdults) => (countAdults > 0 ? countAdults - 1 : 0));
  }, [adults]);

  const handleIncrementAdults = useCallback(() => {
    setAdults((countAdults) => countAdults + 1);
  }, [adults]);

  const handleStarsChange = useCallback(
    (stars: number) => {
      setCountStars(stars);
    },
    [countStars]
  );

  const handleDecrementChildren = useCallback(() => {
    setCountChildren((childrenTotal) => (childrenTotal > 0 ? childrenTotal - 1 : 0));
  }, [countChildren]);

  const handleIncrementChildren = useCallback(() => {
    setCountChildren((childrenTotal) => childrenTotal + 1);
  }, [countChildren]);

  const applyFilters = () => {
    setSearch({
      maxAdults: adults.toString(),
      maxChildren: countChildren.toString(),
      stars: countStars.toString()
    });
  };

  const resetFilters = () => {
    setSearch({ maxAdults: '0', maxChildren: '0', stars: '0' });
    setAdults(0);
    setCountChildren(0);
    setCountStars(0);
  };

  return {
    handleDecrementAdults,
    handleIncrementAdults,
    handleDecrementChildren,
    handleIncrementChildren,
    countAdults: adults,
    countChildren,
    countStars,
    handleStarsChange,
    applyFilters,
    resetFilters
  };
}

export default useFilter;
