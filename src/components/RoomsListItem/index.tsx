import { IRoom } from 'src/types/hotels';

interface IRoomListItemProps {
  room: IRoom;
}

const RoomsListItem = ({ room }: IRoomListItemProps) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <div className="flex flex-col md:flex-row md:justify-center justify-start items-start w-full gap-6">
        <div className="basis-1/3">
          <h3 className="mb-4">{room.name}</h3>
          <p>Adults: {room.occupancy.maxAdults}</p>
          <p>Children: {room.occupancy.maxChildren}</p>
        </div>
        <p className="text-left w-full">{room.longDescription}</p>
      </div>
    </div>
  );
};

export default RoomsListItem;
