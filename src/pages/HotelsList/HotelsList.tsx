import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FiltersBox from 'src/pages/HotelsList/components/FiltersBox';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';
import HotelCard from 'src/pages/HotelsList/components/HotelCard';
import { IHotel, IRoom } from 'src/types/hotels';
import EmptyList from './components/EmptyList';

function HotelList() {
  const hotels = useLoaderData() as IHotel[];
  const [hotelsData, setHotelsData] = useState(hotels);
  const [search, setSearch] = useCustomSearchParams();

  const filter = (data: IHotel[], param: string) => {
    const hotelsWithAvailableRoom = data.reduce((acc, hotel) => {
      const isRooms = hotel.rooms.filter((room: IRoom) => {
        // @ts-ignore
        return room.occupancy[param as keyof IOccupancy] >= Number(search[param]);
      });
      if (isRooms.length > 0) {
        acc.push({ ...hotel, rooms: isRooms });
      }
      return acc;
    }, [] as IHotel[]);
    return hotelsWithAvailableRoom;
  };

  const filterByStar = (data: IHotel[], param: string) => {
    const matchingHotels = data.filter(
      (hotel: IHotel) => Number(hotel.starRating) === Number(search[param])
    );
    return matchingHotels;
  };

  useEffect(() => {
    let filteredHotels = hotelsData;

    if (search.maxAdults && search.maxAdults !== '0') {
      filteredHotels = filter(filteredHotels, 'maxAdults');
    }

    if (search.maxChildren && search.maxChildren !== '0') {
      filteredHotels = filter(filteredHotels, 'maxChildren');
    }
    if (search.stars && search.stars !== '0') {
      filteredHotels = filterByStar(filteredHotels, 'stars');
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

export default HotelList;
