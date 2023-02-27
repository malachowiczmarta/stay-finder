import { IHotel, IRoomResponse } from 'src/types/hotels';
import { api } from './config';

const fetchHotelsList = () => api.get<IHotel[]>(`hotels?collection-id=OBMNG`);
const fetchRoomsList = (id: string) => api.get<IRoomResponse>(`roomRates/OBMNG/${id}`);

export const getHotelsList = async () => {
  try {
    const { data: hotels } = await fetchHotelsList();

    const roomPromises = hotels.map(async (hotel) => {
      const { data } = await fetchRoomsList(hotel.id);
      return { [hotel.id]: data.rooms };
    });
    // Wait for all the room promises to resolve
    const roomData = await Promise.all(roomPromises);

    // Combine the hotel and room data into a single array
    const hotelsWithRooms = hotels.map((hotel) => {
      const hotelRooms = roomData.find((room) => room[hotel.id])?.[hotel.id] ?? [];
      return { ...hotel, rooms: hotelRooms };
    });
    return hotelsWithRooms;
  } catch (error) {
    throw new Error('error');
  }
};
