import { useQuery } from 'react-query';
import BaseLayout from 'src/components/BaseLayout';
import FiltersBox from 'src/components/FiltersBox';
import HotelCard from 'src/pages/HotelsList/components/HotelCard';
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
    <BaseLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-around w-full mb-4">
            <FiltersBox />
            {/* <Link href="/offers">
              <button className={query.category ? 'btn-secondary' : 'btn-primary'}>All</button>
            </Link>
            <Link href="?category=sale">
              <button className={query.category === 'sale' ? 'btn-primary' : 'btn-secondary'}>
                For sale
              </button>
            </Link>
            <Link href="?category=rent">
              <button className={query.category === 'rent' ? 'btn-primary' : 'btn-secondary'}>
                For rent
              </button>
            </Link> */}
          </div>
          <ul className="flex flex-col -m-4">
            {data?.map((hotel: IHotel) => (
              <HotelCard hotel={hotel} key={hotel.id}></HotelCard>
            ))}
          </ul>
        </div>
      </section>
    </BaseLayout>
  );
}

export default HotelList;
