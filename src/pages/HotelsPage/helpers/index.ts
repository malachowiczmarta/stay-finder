import { SearchQuery } from 'src/hooks/useCustomSearchParams';
import { HotelFilter, IHotel, IOccupancy, IRoom } from 'src/types/hotels';

export const filter = (data: IHotel[], param: HotelFilter, search: SearchQuery) => {
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
