import { useCallback, useState } from 'react';

function useFilter() {
  const [adults, setAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  // const [search, setSearch] = useCustomSearchParams();

  const handleDecrementAdults = useCallback(() => {
    setAdults((countAdults) => (countAdults > 0 ? countAdults - 1 : 0));
  }, [adults]);

  const handleIncrementAdults = useCallback(() => {
    setAdults((countAdults) => countAdults + 1);
  }, [adults]);

  const handleDecrementChildren = useCallback(() => {
    setCountChildren((childrenTotal) => (childrenTotal > 0 ? childrenTotal - 1 : 0));
  }, [countChildren]);

  const handleIncrementChildren = useCallback(() => {
    setCountChildren((childrenTotal) => childrenTotal + 1);
  }, [countChildren]);

  return {
    handleDecrementAdults,
    handleIncrementAdults,
    handleDecrementChildren,
    handleIncrementChildren,
    countAdults: adults,
    countChildren
  };
}

export default useFilter;
