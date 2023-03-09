import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FiltersBox from 'src/pages/HotelsPage/components/FiltersBox';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';
import HotelCard from 'src/pages/HotelsPage/components/HotelCard';
import { HotelFilter, IHotel, IOccupancy, IRoom } from 'src/types/hotels';
import EmptyList from './components/EmptyList';

function HotelPage() {
  const hotels = useLoaderData() as IHotel[];
  const [hotelsData, setHotelsData] = useState(hotels);
  const [search] = useCustomSearchParams();

  const filter = (data: IHotel[], param: HotelFilter) => {
    if (param === 'stars') {
      const matchingHotels = data.filter(
        (hotel: IHotel) => Number(hotel.starRating) === Number(search[param])
      );
      return matchingHotels;
    } else {
      const hotelsWithAvailableRoom = data.reduce((acc, hotel) => {
        const isRooms = hotel.rooms.filter((room: IRoom) => {
          return room.occupancy[param as keyof IOccupancy] >= Number(search[param]);
        });
        if (isRooms.length > 0) {
          acc.push({ ...hotel, rooms: isRooms });
        }
        return acc;
      }, [] as IHotel[]);
      return hotelsWithAvailableRoom;
    }
  };

  useEffect(() => {
    let filteredHotels = hotelsData;

    for (const [key, value] of Object.entries(search)) {
      if (value !== '0') {
        filteredHotels = filter(filteredHotels, key as HotelFilter);
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
