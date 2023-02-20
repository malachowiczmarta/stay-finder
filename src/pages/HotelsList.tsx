import { useQuery } from 'react-query';
import { IHotel } from 'src/types/hotels';

function HotelList() {
  const { isLoading, error, data } = useQuery<IHotel[]>('hotels', () =>
    fetch('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG').then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Hotels</h2>
      <ul>
        {data?.map((hotel: IHotel) => (
          <li key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
