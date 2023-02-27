import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FiltersBox from 'src/components/FiltersBox';
import { useCustomSearchParams } from 'src/hooks/useCustomSearchParams';
import HotelCard from 'src/pages/HotelsList/components/HotelCard';
import { IHotel, IRoom } from 'src/types/hotels';

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

  // useEffect(() => {
  //   console.log('params', search);

  //   if (search.maxAdults) {
  //     const filteredHotels = filter(hotels, 'maxAdults');
  //     console.log('filteredHotels adults', filteredHotels);

  //     setHotelsData(filteredHotels);
  //   }

  //   if (search.maxChildren) {
  //     const filteredHotels = filter(hotels, 'maxChildren');
  //     console.log('filteredHotels maxChildren', filteredHotels);
  //     setHotelsData(filteredHotels);
  //   }
  // }, [search.maxAdults, search.maxChildren]);

  useEffect(() => {
    console.log('params', search);

    let filteredHotels = hotelsData;

    if (search.maxAdults) {
      filteredHotels = filter(filteredHotels, 'maxAdults');
      console.log('filteredHotels adults', filteredHotels);
    }

    if (search.maxChildren) {
      filteredHotels = filter(filteredHotels, 'maxChildren');
      console.log('filteredHotels maxChildren');
    }

    setHotelsData(filteredHotels);
  }, [search.maxAdults, search.maxChildren]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-around w-full mb-4">
          <FiltersBox />
        </div>
        <ul className="flex flex-col -m-4">
          {hotelsData?.map((hotel: IHotel) => (
            <HotelCard hotel={hotel} key={hotel.id}></HotelCard>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HotelList;
