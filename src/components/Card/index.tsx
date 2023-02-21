import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { IHotel, IRoom, Rooms } from 'src/types/hotels';
import StarRating from '../FiveStarRating';
import RoomsListItem from '../RoomsListItem';

interface ICardProps {
  hotel: IHotel;
}

const Card = ({ hotel }: ICardProps) => {
  const { isLoading, error, data } = useQuery<Rooms>('rooms', () =>
    fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-start gap-6 w-full mb-6">
          <img
            className="h-60 basis-1/3 rounded object-cover object-center"
            src={hotel?.images[0]?.url}
            alt="content"
          />
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2>{hotel.name}</h2>
              <StarRating rating={hotel.starRating} />
            </div>
            <p>adres</p>
            <p>adres</p>
            <p className="leading-relaxed text-base">{hotel.description}</p>
          </div>
        </div>
        <ul className="flex flex-col justify-start items-start gap-2">
          {data?.rooms?.map((room: IRoom) => (
            <RoomsListItem key={room.id} room={room} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
