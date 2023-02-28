import Card from 'src/components/Card';
import { IHotel, IRoom } from 'src/types/hotels';
import StarRating from '../../../../components/FiveStarRating';
import RoomsListItem from '../../../../components/RoomsListItem';
import Slider from '../../../../components/Slider';
import AddressWithCheckInHours from '../AddressWithCheckInHours';

interface ICardProps {
  hotel: IHotel;
}

const HotelCard = ({ hotel }: ICardProps) => {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-start gap-6 w-full mb-6">
        <div className="h-60 basis-1/3 rounded object-cover object-center">
          <Slider images={hotel.images} />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2>{hotel.name}</h2>
            <StarRating rating={hotel.starRating} />
          </div>
          <AddressWithCheckInHours data={hotel} />
          <p className="leading-relaxed text-base">{hotel.description}</p>
        </div>
      </div>
      <ul className="flex flex-col justify-start items-start gap-2">
        {hotel?.rooms?.map((room: IRoom) => (
          <RoomsListItem key={room.id} room={room} />
        ))}
      </ul>
    </Card>
  );
};

export default HotelCard;
