import { useSearchParams } from 'react-router-dom';
import { HotelFilter } from 'src/types/hotels';

export type SearchQuery = {
  [K in HotelFilter]: string;
};

export const useCustomSearchParams = () => {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search)) as SearchQuery;

  return [searchAsObject, setSearch] as const;
};
