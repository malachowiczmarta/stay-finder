import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FiltersBox from 'src/pages/HotelsPage/components/FiltersBox';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';
import HotelCard from 'src/pages/HotelsPage/components/HotelCard';
import { HotelFilter, IHotel } from 'src/types/hotels';
import EmptyList from './components/EmptyList';
import { filter } from './helpers';

function HotelPage() {
  const hotels = useLoaderData() as IHotel[];
  const [hotelsData, setHotelsData] = useState(hotels);
  const [search] = useCustomSearchParams();

  useEffect(() => {
    let filteredHotels = hotelsData;

    for (const [key, value] of Object.entries(search)) {
      if (value !== '0') {
        filteredHotels = filter(filteredHotels, key as HotelFilter, search);
      }
    }

    if (search.maxChildren === '0' && search.maxAdults === '0' && search.stars === '0') {
      filteredHotels = hotels;
    }
    setHotelsData(filteredHotels);
  }, [search.maxAdults, search.maxChildren, search.stars]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex justify-around w-full mb-4">
          <FiltersBox />
        </div>
        <ul className="flex flex-col -m-4">
          {hotelsData?.length > 0 &&
            hotelsData?.map((hotel: IHotel) => (
              <HotelCard hotel={hotel} key={hotel.id}></HotelCard>
            ))}
          {hotelsData?.length === 0 && <EmptyList />}
        </ul>
      </div>
    </section>
  );
}

export default HotelPage;
